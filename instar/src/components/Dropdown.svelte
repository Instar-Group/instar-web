<script>
  import "agnostic-svelte/css/common.min.css";
  import { Select } from "agnostic-svelte";
  const eventsOption = [
    { value: "Chrysaurus", label: "Chrysaurus" },
    { value: "Cricket", label: "Cricket" },
    { value: "Football", label: "Football" },
    { value: "Basketball", label: "Basktetball" },
  ];
  const pointsOption = [
    { value: "10", label: "10" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
    { value: "250", label: "250" },
  ];
</script>

<div class="flex flex-row space-x-96 justify-around items">
    <section class="w-64 bg-slate-600">
      <div class="h4 mbs24 mbe24">Select Event</div>
      <Select uniqueId="selSvelte1" name="select1"    size="large" options={eventsOption} />
    </section>
    <section class="w-64 bg-slate-600">
      <div class="h4 mbs24 mbe24">Points</div>
      <Select uniqueId="selSvelte1"    size="large" name="select1" options={pointsOption} />
    </section>
</div>
