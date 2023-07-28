async function InitMocks() {
  if (process.env.REACT_APP_API_MOCKING !== "enabled") return;

  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    await worker.start();
  }
}

export default InitMocks;
