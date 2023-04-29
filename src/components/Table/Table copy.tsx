import TableStyles from "./Table.module.scss";
import Element from "../Element/Element";

const Table: React.FC = () => {
    return (
        <div className={TableStyles.periodic_table}>
            <div className="empty-spacer-1" />
            <div className="empty-spacer-2" />
            <Element symbol="H" name="Hydrogen" number={1} atomicMass={1.008} color="red" />
            <div className="periodic-element intense-work" data-description="Coming up with sassy commit messages 🔥">
                <div className="periodic-element-inner">
                    <div className="title">Ct</div>
                    <div className="description">Commits</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Making custom emojis for Slack 💪🏻">
                <div className="periodic-element-inner">
                    <div className="title">Sl</div>
                    <div className="description">Slack</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="'Wikipedia Wormhole' is a thing. And it is dangerous 🐛">
                <div className="periodic-element-inner">
                    <div className="title">Wk</div>
                    <div className="description">Wikipedia</div>
                </div>
            </div>
            <div
                className="periodic-element fun-stuff"
                data-description="Choosing the right playlist. (If my Spotify is working... it's always not working)"
            >
                <div className="periodic-element-inner">
                    <div className="title">Sp</div>
                    <div className="description">Spotify</div>
                </div>
            </div>
            <a
                className="periodic-element social-media"
                data-description="If you say something witty, it's going on my Twitter 🐦"
                href="https://twitter.com/meowlivia_"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">Tw</div>
                    <div className="description">Twitter</div>
                </div>
            </a>
            <div className="periodic-element social-media" data-description="Professional Dota 2 Watcher right here ✌️">
                <div className="periodic-element-inner">
                    <div className="title">Tc</div>
                    <div className="description">Twitch</div>
                </div>
            </div>
            <div
                className="periodic-element intense-work"
                data-description="Creating GitHub issues, a.k.a. tossing problems which I can solve to the frontend team"
            >
                <div className="periodic-element-inner">
                    <div className="title">Gt</div>
                    <div className="description">GitHub</div>
                </div>
            </div>
            <div
                className="periodic-element intense-work"
                data-description="Trying to get yarn working after an update. The main reason I toss issues to the frontend team."
            >
                <div className="periodic-element-inner">
                    <div className="title">Yn</div>
                    <div className="description">Yarn</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="A skill I'm trying to learn 🎨... and failing to learn 😛">
                <div className="periodic-element-inner">
                    <div className="title">Il</div>
                    <div className="description">Illustration</div>
                </div>
            </div>
            <a
                className="periodic-element just-trying"
                data-description="Resident Designer. Keeping the diminishing flame of web design in me alive 🕯️"
                href="https://tellystats.com"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">Te</div>
                    <div className="description">TellyStats</div>
                </div>
            </a>
            <div
                className="periodic-element just-trying"
                data-description="I just need to stop adding items and actually start doing things. Am I the only one who is still using Wunderlist? 😂"
            >
                <div className="periodic-element-inner">
                    <div className="title">Wu</div>
                    <div className="description">Wunderlist</div>
                </div>
            </div>
            <div
                className="periodic-element fun-stuff"
                data-description="I have zero cooking skills, so I watch cooking videos and never try cooking for real 🍳"
            >
                <div className="periodic-element-inner">
                    <div className="title">Cv</div>
                    <div className="description">Cooking</div>
                </div>
            </div>
            <div className="periodic-element fun-stuff" data-description="Or any animal gifs, basically. 🐈🐕🦊🦔🦉🐍🐬🦄">
                <div className="periodic-element-inner">
                    <div className="title">Dg</div>
                    <div className="description">Dog Gifs</div>
                </div>
            </div>
            <a
                className="periodic-element fun-stuff"
                data-description="Getting distracted by Toggl comics 🙃"
                href="https://blog.toggl.com"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">Tg</div>
                    <div className="description">Toggl Blog</div>
                </div>
            </a>
            <div
                className="periodic-element just-trying"
                data-description="I google every damn thing. Including movie spoilers. While watching the movie. Yes."
            >
                <div className="periodic-element-inner">
                    <div className="title">Gg</div>
                    <div className="description">Google</div>
                </div>
            </div>
            <a
                className="periodic-element just-trying"
                data-description="I like spreadsheets so I create them for the smallest reasons 🧐"
                href="https://docs.google.com/spreadsheets/d/1Dim2nKRjgpkjA4miqTzcLPT68L0B5LU2aWZWF5hHYAc/edit#gid=0"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">Ex</div>
                    <div className="description">Excel</div>
                </div>
            </a>
            <div
                className="periodic-element intense-work"
                data-description="I still StackOverflow the simplest shit 'just to be sure'. Where will we be without it ❤️"
            >
                <div className="periodic-element-inner">
                    <div className="title">So</div>
                    <div className="description">StackOv.</div>
                </div>
            </div>
            <div
                className="periodic-element intense-work"
                data-description="It's very much not my job, but sometimes I stick my hand into the Coding Projects jar 🍪 anyway"
            >
                <div className="periodic-element-inner">
                    <div className="title">Cd</div>
                    <div className="description">Coding</div>
                </div>
            </div>
            <div
                className="periodic-element just-trying"
                data-description="I spend so much time on Codepen, I decided to go Pro because I felt bad 💸"
            >
                <div className="periodic-element-inner">
                    <div className="title">Cp</div>
                    <div className="description">Codepen</div>
                </div>
            </div>
            <div className="periodic-element just-trying" data-description="We all have that one thing that keeps us alive 🛫🗺️">
                <div className="periodic-element-inner">
                    <div className="title">Tr</div>
                    <div className="description">Travel</div>
                </div>
            </div>
            <a
                className="periodic-element social-media"
                data-description="Fuck this app. It's a terrible love-hate relationship."
                href="https://www.instagram.com/meowliviaaa/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">In</div>
                    <div className="description">Instagram</div>
                </div>
            </a>
            <a
                className="periodic-element fun-stuff"
                data-description="Obsessing over musicals and stalking broadway stars is 👏🏻 not 👏🏻 a 👏🏻 crime!"
                href="https://codepen.io/collection/XPWkdW/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="periodic-element-inner">
                    <div className="title">Mu</div>
                    <div className="description">Musicals</div>
                </div>
            </a>
            <div className="periodic-element fun-stuff" data-description="I learn memes, I make memes, I breathe memes.">
                <div className="periodic-element-inner">
                    <div className="title">Me</div>
                    <div className="description">Memes</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Battling double columns in Notion">
                <div className="periodic-element-inner">
                    <div className="title">No</div>
                    <div className="description">Notion</div>
                </div>
            </div>
            <div
                className="periodic-element social-media"
                data-description="Oh my god. Someone please save me from this Reddit hell hole 😭"
            >
                <div className="periodic-element-inner">
                    <div className="title">Re</div>
                    <div className="description">Reddit</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Research &amp; Documentation nobody asks for 🤓📝">
                <div className="periodic-element-inner">
                    <div className="title">Rd</div>
                    <div className="description">Research</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Stats. Data. Stats. Data. 📊 Just lots of reporting.">
                <div className="periodic-element-inner">
                    <div className="title">St</div>
                    <div className="description">Stats</div>
                </div>
            </div>
            <div className="periodic-element intense-work" data-description="Ads. Ads. Ads. If you've seen a Toggl ad, it was me. (Sorry)">
                <div className="periodic-element-inner">
                    <div className="title">Ad</div>
                    <div className="description">Ads</div>
                </div>
            </div>
        </div>
    );
};
export default Table;
