import { TimeSlot } from "./timeslot";

export function Program() {
  return (
    <section id="rsvp" className="flex flex-col gap-4">
      <h2 className="text-3xl text-center mb-4">Program</h2>
      <TimeSlot
        time="13:00"
        title="Avgang med Skibladner fra Skibladnerbrygga i Hamar sentrum"
        desc="Bryllupskake, kaffe & jordbær"
        link="https://www.google.com/maps/place/Skibladnerbrygga/@60.792532,11.0674807,17z/data=!3m1!4b1!4m6!3m5!1s0x4641e13bc9706305:0xbed6d0f3cb377f03!8m2!3d60.792532!4d11.0674807!16s%2Fg%2F11bzq34k2h?entry=ttu"
      />
      <TimeSlot
        time="15:00"
        title="Ankomst Atlungstad"
        desc="Apretif, kos og hygge"
      />
      <TimeSlot time="17:00" title="Middag & fest" />
    </section>
  );
}
