import type { ConnerTailwindConfig } from "conner.env";
import type { FormMethod } from "remix";
import { Form } from "remix";
import classNames from "~/helpers/class-names";
import isLightColor from "~/helpers/is-light-color";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color: keyof ConnerTailwindConfig["theme"]["colors"];
  href?: string;
  method?: FormMethod;
}

export default function Button({
  children,
  className,
  color,
  href,
  method,
}: ButtonProps): JSX.Element {
  const classes = classNames(
    `bg-${color}`,
    `text-${isLightColor(color) ? "black" : "white"}`,
    className
  );

  function TheButton(): JSX.Element {
    return <button className={classes}>{children}</button>;
  }

  if (typeof href !== "undefined") {
    return (
      <Form action={href} method={method ?? "get"} reloadDocument>
        <TheButton />
      </Form>
    );
  }

  return <TheButton />;
}
