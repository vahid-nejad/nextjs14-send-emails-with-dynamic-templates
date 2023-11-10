import { Button } from "@/components/ui/button";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export default function Home() {
  const send = async () => {
    "use server";
    await sendMail({
      to: "sakuradev23@gmail.com",
      name: "Vahid",
      subject: "Test Mail",
      body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <form>
        <Button formAction={send}>test</Button>
      </form>
    </main>
  );
}
