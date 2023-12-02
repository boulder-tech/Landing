interface Props {
    fact?: string,
    factcol?: string,
}

const Fact = ({fact, factcol}: Props) => {
    return (
        <div>
            <h3 className="text-xl text-foreground-heading">{fact}</h3>
            <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#245BFF] to-[#00B2FF]">{factcol}</h3>
        </div>
    );
}

export default Fact;