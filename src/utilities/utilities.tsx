const handleChildElementClick = (e: React.FormEvent) => e.stopPropagation();

const formatValue = (value: string | number | undefined) => {
    const threshold = 1e-6;
    if (typeof value === "number" && value !== 0) {
        if (Math.abs(value) < threshold) {
            const exponent = Math.floor(Math.log10(value));
            const coefficient = (value / 10 ** exponent).toPrecision();
            const exponentFormatted = exponent.toString().replace(/^-/, "");

            return (
                <span>
                    <span className="coefficient">{coefficient}*10</span>
                    <sup className="exponent">-{exponentFormatted}</sup>
                </span>
            );
        }
    }
    return value;
};

export { handleChildElementClick, formatValue };
