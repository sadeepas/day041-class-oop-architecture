// TypeScript: Clean OOP with Access Modifiers (Day 41)
// Day 41 - Type-Safe Application Development (Intermediate)

console.log("=== TypeScript: Clean OOP with Access Modifiers (Day 41) ===");

interface MetricPayload {
  day: number;
  topic: string;
  timestamp: string;
  status: "active" | "completed";
}

class PipelineEngine {
  private history: MetricPayload[] = [];

  constructor(private name: string) {}

  public record(metric: MetricPayload): void {
    this.history.push(metric);
    console.log(`[${this.name}] Recorded: ${metric.topic} (Status: ${metric.status})`);
  }

  public getSummary() {
    return {
      totalEntries: this.history.length,
      latest: this.history[this.history.length - 1]
    };
  }
}

const engine = new PipelineEngine("class-oop-architecture");
engine.record({
  day: 41,
  topic: "TypeScript: Clean OOP with Access Modifiers (Day 41)",
  timestamp: new Date().toISOString(),
  status: "active"
});

console.log("Telemetry Summary:", engine.getSummary());
