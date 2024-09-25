import Hero from "../components/Hero";
import PersonalStatement from "../components/PersonalStatement";
import Software from "../components/Software";
import EmploymentHistory from "../components/EmploymentHistory";
import EducationHistory from "../components/EducationHistory";
import Portfolio from "../components/Portfolio";
import Interests from "../components/Interests";

export default function Home() {
  return (
    <main className="">
      <Hero
        firstName="Moses"
        secondName="Sangobiyi"
        emailAddress="msangobiyi@gmail.com"
        phoneNumber="+44 7951 214 155"
        github="https://www.github.com/sangoandco"
      />
      <PersonalStatement />
      <EmploymentHistory />
      <Portfolio />
      <Software />
      <EducationHistory />
      <Interests />
    </main>
  );
}
