import { AnimatedPage } from "../components";
import { email, github, linkedin, person, phone, stackoverflow, youtube, location, internet } from '../assets/icons';
import { Image, Text, Holder, Hr } from "../styled";
import { useWindowSize } from "../hooks";

function Contact() {
  const { width } = useWindowSize();
  return (
    <AnimatedPage>
      <div style={{ maxHeight: "calc(-100px + 100vh)" }} className="scroller text-holder text-holder-contact-page">
        <h1 style={{ marginBottom: "2rem" }}>Contact</h1>
        <Holder>
          <Image src={person} alt="Name" title="Name" />
          <Text>Petrović Lazar</Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={phone} alt="Phone" title="Phone number" />
          <Text>+381693311860</Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={email} alt="E-mail" title="E-mail" />
          <Text>petrovic.lazar.1997@gmail.com</Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={location} alt="Location" title="Location" />
          <Text>111000, Niš, Serbia (Remote)</Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={youtube} alt="YouTube" title="YouTube" />
          <Text>
            <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCg4TtphO_BFbo4wC_cJ3uRA">
              https://youtube.com/channel/UCg4TtphO_BFbo4wC_cJ3uRA
            </a>
          </Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={github} alt="GitHub" title="GitHub" />
          <Text>
            <a target="_blank" rel="noreferrer" href="https://github.com/LazarPetrovic1">https://github.com/LazarPetrovic1</a>
          </Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={linkedin} alt="LinkedIn" title="LinkedIn" />
          <Text>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lazar-petrovic-209220174/">https://www.linkedin.com/in/lazar-petrovic-209220174/</a>
          </Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={stackoverflow} alt="StackOverflow" title="StackOverflow" />
          <Text>
            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/13454247/lazar-petrovic">https://stackoverflow.com/users/13454247/lazar-petrovic</a>
          </Text>
        </Holder>
        {width <= 1100 && <Hr />}
        <Holder>
          <Image src={internet} alt="Resume (Web format)" title="Resume (Web format)" />
          <Text>
            <a target="_blank" rel="noreferrer" href="https://lazarpetrovic1.github.io/web-resume/">https://lazarpetrovic1.github.io/web-resume/</a>
          </Text>
          {/* {width <= 1100 && <Hr />} */}
        </Holder>
      </div>
    </AnimatedPage>
  )
}

export default Contact;