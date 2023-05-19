const handleChildElementClick = (e: React.FormEvent) => e.stopPropagation();

const fixFloatingPoint = (val: number) => Number.parseFloat(val.toPrecision(15));

const formatValue = (value: string | number | undefined) => {
    const threshold = 1e-6;
    if (typeof value === "number" && value !== 0) {
        if (Math.abs(value) < threshold || Math.abs(value) > -threshold) {
            const exponent = Math.floor(Math.log10(value));
            const coefficient = fixFloatingPoint(value / 10 ** exponent);
            const exponentFormatted = exponent.toString().replace(/^-/, "");

            return (
                <span>
                    <span className="coefficient">{coefficient}*10</span>
                    <sup className="exponent">
                        {exponent < 0 ? "-" : ""}
                        {exponentFormatted}
                    </sup>
                </span>
            );
        }
    }
    return value;
};

export { handleChildElementClick, formatValue, fixFloatingPoint };
