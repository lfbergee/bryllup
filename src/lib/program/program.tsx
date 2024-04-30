import { TimeSlot } from "./timeslot";

export function Program() {
  return (
    <section id="rsvp" className="flex flex-col gap-4">
      <h2 className="text-3xl text-center mb-4">Program</h2>
      <TimeSlot
        time="13:00"
        title="Avgang fra Skibladnerbrygga i Hamar sentrum"
        desc="Bryllupskake, kaffe & jordbær"
      />
      <TimeSlot
        time="15:00"
        title="Ankomst Atlungstad"
        desc="Apretif & omvisning på destilleriet"
      />
      <TimeSlot time="17:00" title="Middag & fest" />
    </section>
  );
}
