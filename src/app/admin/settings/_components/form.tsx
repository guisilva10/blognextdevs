"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

import { useTheme } from "next-themes";
import { toast } from "@/app/_components/ui/use-toast";
import { CheckCircleIcon } from "lucide-react";
import { themeFormSchema } from "./schema";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";

export function ThemeForm() {
  const theme = useTheme();

  const form = useForm<z.infer<typeof themeFormSchema>>({
    resolver: zodResolver(themeFormSchema),
    defaultValues: {
      theme: theme.theme ?? "light",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    theme.setTheme(data.theme as "light" | "dark");

    toast({
      title: "Tema Alterado!",
      description: "Uau, o tema foi alterado com sucesso!!",
      variant: "success",
      action: <CheckCircleIcon className="text-primary size-4" />,
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tema</CardTitle>
            <CardDescription>Selecione o tema para o painel.</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormMessage />
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid max-w-md grid-cols-2 gap-8 pt-2"
                  >
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="light" className="sr-only" />
                        </FormControl>
                        <div className="border-muted hover:border-accent items-center rounded-md border-2 p-1">
                          <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                            <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="bg-primary h-2 w-[80px] rounded-lg" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="bg-primary h-4 w-4 rounded-full" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                              <div className="bg-primary h-4 w-4 rounded-full" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                          </div>
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Light
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="dark" className="sr-only" />
                        </FormControl>
                        <div className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground items-center rounded-md border-2 p-1">
                          <div className="bg-n-950 space-y-2 rounded-sm p-2">
                            <div className="space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                              <div className="bg-primary h-2 w-[80px] rounded-lg" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                              <div className="bg-primary h-4 w-4 rounded-full" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                            <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                              <div className="bg-primary h-4 w-4 rounded-full" />
                              <div className="bg-primary h-2 w-[100px] rounded-lg" />
                            </div>
                          </div>
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Dark
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={form.formState.isLoading}
              type="submit"
              className="mr-0 ml-auto flex"
            >
              {form.formState.isSubmitting && "Salvando..."}
              {!form.formState.isSubmitting && "Alterar tema"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
