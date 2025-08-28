"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import { toast } from "@/hooks/use-toast";
import { Translations } from "@/types/translations";
import { useActionState, useEffect } from "react";
import { addPlace } from "../_actions/place";

type FormState = {
  status: number;
  message: string;
};

const initialState: FormState = {
  status: 0,
  message: "",
};

function Form({ translations }: { translations: Translations }) {
  const [state, action, pending] = useActionState<FormState, FormData>(
    async (_prev, formData) => {
      return await addPlace(_prev, formData);
    },
    initialState
  );

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message,
        className: state.status === 201 ? "text-green-400" : "text-destructive",
      });
    }
  }, [state.message, state.status]);

  return (
    <form action={action}>
      <div className="space-y-2">
        <Label htmlFor="name">
          {translations.admin.categories.form.name.label}
        </Label>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={translations.admin.categories.form.name.placeholder}
          />
          <Button type="submit" size="lg" disabled={pending}>
            {pending ? <Loader /> : translations.create}
          </Button>
        </div>
        {/* مفيش state.error لأن addPlace مش بيرجعها */}
      </div>
    </form>
  );
}

export default Form;
