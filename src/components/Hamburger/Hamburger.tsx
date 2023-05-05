import HamburgerStyles from "./Hamburger.module.scss";

interface Props {
    expanded: boolean;
    className?: string;
    onClick: () => void;
}

const Hamburger: React.FC<Props> = ({ expanded, className, onClick }) => {
    return (
        <div className={`${HamburgerStyles.lines} ${className}`} aria-expanded={expanded} role="button" tabIndex={0} onClick={onClick}>
            <span className={HamburgerStyles.line} />
            <span className={HamburgerStyles.line} />
            <span className={HamburgerStyles.line} />
        </div>
    );
};

export default Hamburger;
