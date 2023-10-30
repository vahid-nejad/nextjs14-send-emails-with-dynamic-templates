"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <Button
        onClick={() =>
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            variant: "success",
          })
        }
      >
        Test Button
      </Button>
      <Input label="First Name" icon={<User />} />
      <Input label="First Name" />
    </main>
  );
}
