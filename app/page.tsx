import Hero from "../components/Hero";
import PersonalStatement from "../components/PersonalStatement";
import Software from "../components/Software";
import EmploymentHistory from "../components/EmploymentHistory";
export default function Home() {
  return (
    <main className="">
      <Hero firstName="Moses" secondName="Sangobiyi" emailAddress="msangobiyi@gmail.com" phoneNumber="+44 7951 214 155" />
      <PersonalStatement />
      <Software title="Software" />
      <EmploymentHistory />
    </main>
  );
}
