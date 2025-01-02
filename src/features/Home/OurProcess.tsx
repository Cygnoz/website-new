import centerimg from "../../assets/Images/processFrameH.svg";
import business from "../../assets/Icons/Business.svg";
import stream from "../../assets/Icons/Stream.svg";
import auto from "../../assets/Icons/Animating.svg";
import seam from "../../assets/Icons/seamless.svg";
import reactandnode from "../../assets/Icons/ReactandNode.svg";
import Automatingeg from "../../assets/Icons/Automatingeg.svg";
import Discovery from "../../assets/Icons/Discovery.svg";
import Building from "../../assets/Icons/Building.svg";
import Fortifying from "../../assets/Icons/Fortifying.svg";
import Rigorous from "../../assets/Icons/Rigorous.svg";
import uieg from "../../assets/Icons/uieg.svg";
import testeg from "../../assets/Icons/testeg.svg";
import leftimg from "../../assets/Images/solutionleftimg.png";

type Props = {};

function OurProcess({ }: Props) {
    const SolutionsL = [
        {
            icon: business,
            p1: "Business Requirement Gathering",
            p2: "In-depth discussions with stakeholders to understand their business needs, pain points, and goals",
            icon1: "",
        },
        {
            icon: stream,
            p1: `Streamlined Development and Deployment Process`,
            p2: "Creating interactive prototypes to simulate user interactions and test the usability of the design.",
            icon1: reactandnode,
        },
        {
            icon: auto,
            p1: "Automating Your Development Workflow with CI/CD",
            p2: "Streamline your development process and ensure consistent, high-quality deployments with our automated CI/CD pipeline.",
            icon1: Automatingeg,
        },
        {
            icon: seam,
            p1: "Seamless Deployment to Production",
            p2: "Our deployment process is designed to ensure smooth and efficient delivery of your application",
            icon1: "",
        },
    ];

    const SolutionsR = [
        {
            icon: Discovery,
            p1: "Discovery Phase, UI Design & Prototype",
            p2: "Creating interactive prototypes to simulate user interactions and test the usability of the design.",
            icon1: uieg,
        },
        {
            icon: Building,
            p1: "Building a Robust Database Foundation",
            p2: "A well-structured database is essential for any successful application.",
            icon1: "",
        },
        {
            icon: Fortifying,
            p1: "Fortifying Your Application with Security Testing",
            p2: "Protect your application from vulnerabilities and attacks with our comprehensive security testing process.",
            icon1: "",
        },
        {
            icon: Rigorous,
            p1: "Rigorous Testing for Optimal Performance",
            p2: "Our comprehensive testing approach ensures that your software delivers exceptional performance and user experience",
            icon1: testeg,
        },

    ];

    return (
        <div className="main ">
            <div className="left-img">
                <img  src={leftimg} alt="" />
            </div>
            <div className="our-process-container">
                <div className="solutions-left">
                    {SolutionsL.map((solution, index) => (
                        <div key={index} className="solution-item-left">
                            <img src={solution.icon} alt="" />
                            <p className="solution-title">{solution.p1}</p>
                            <p className="solution-description">{solution.p2}</p>
                            {solution.icon1 && <img src={solution.icon1} alt="" />}
                        </div>
                    ))}
                </div>
                <div className="center-img">
                    <img src={centerimg} alt="" />
                </div>
                <div className="solutions-right">
                    {SolutionsR.map((solution, index) => (
                        <div key={index} className="solution-item-right">
                            <img src={solution.icon} alt="" className="solution-icon-right" />
                            <p className="solution-title">{solution.p1}</p>
                            <p className="solution-description">{solution.p2}</p>
                            {solution.icon1 && <img src={solution.icon1} alt="" className="solution-icon-right" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurProcess;
