import Hero from "../components/Hero";
import PersonalStatement from "../components/PersonalStatement";
import Software from "../components/Software";
import EmploymentHistory from "../components/EmploymentHistory";
import EducationHistory from "../components/EducationHistory";
import Interests from "../components/Interests";

export default function Home() {
  return (
    <main className="">
      <Hero firstName="Moses" secondName="Sangobiyi" emailAddress="msangobiyi@gmail.com" phoneNumber="+44 7951 214 155" github="github.com/sangoandco" />
      <PersonalStatement />
      <Software />
      <EmploymentHistory />
      <EducationHistory />
      <Interests />
    </main>
  );
}
