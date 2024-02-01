import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import stripMarkdown from 'strip-markdown';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //Get file creation date
        const dateCreated = fs.statSync(fullPath).birthtime;

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Extract a preview from the content (adjust as needed)
        const content = matterResult.content;
        const plainTextPreview = markdownToPlainText(content);
        const preview = plainTextPreview.slice(0, 260) + (plainTextPreview.length > 260 ? '...' : '');

        //Calculate post readtime
        const readTime = calculateReadTime(plainTextPreview);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: dateCreated,
            readTime: readTime,
            image: matterResult.data.image,
            preview: preview,
        }

        // Combine the data with the id
        return blogPost
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const dateCreated = fs.statSync(fullPath).birthtime;

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Extract a preview from the content (adjust as needed)
    const content = matterResult.content;
    const plainTextPreview = markdownToPlainText(content);
    const preview = plainTextPreview.slice(0, 260) + (plainTextPreview.length > 260 ? '...' : '');

    //Calculate post readtime
    const readTime = calculateReadTime(plainTextPreview);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: dateCreated,
        readTime: readTime,
        image: matterResult.data.image,
        preview: preview,
        contentHtml,
    }

    // Combine the data with the id
    return blogPostWithHTML;
}

// Function to convert Markdown to plain text
const markdownToPlainText = (markdownString: string) => {
    const plainText = remark().use(stripMarkdown).processSync(markdownString).toString();
    return plainText;
};

const calculateReadTime = (markdownString: string) => {
    const readTime = Math.round(markdownString.length / 900);
    return readTime;
}