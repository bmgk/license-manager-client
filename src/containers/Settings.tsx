import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { useStyletron } from "baseui";

import Loading from "../components/Loading";

const USER_FIELDS = {
  nickname: "input",
  email: "input",
  name: "input",
  email_verified: "checkbox",
} as const;

const USER_FIELDS_LABELS = {
  nickname: "Nickname",
  email: "Email",
  name: "Name",
  email_verified: "Email verified",
} as const;

type UserFields = keyof typeof USER_FIELDS;

const renderInput = (name: UserFields, value: string | boolean) => {
  const type = USER_FIELDS[name];
  if (type === "input") {
    return (
      <FormControl label={() => USER_FIELDS_LABELS[name]} key={name}>
        <Input disabled value={value as string} />
      </FormControl>
    );
  }

  if (type === "checkbox") {
    return (
      <FormControl label={() => USER_FIELDS_LABELS[name]} key={name}>
        <Checkbox
          disabled
          checked={value as boolean}
          labelPlacement={LABEL_PLACEMENT.right}
        />
      </FormControl>
    );
  }

  return <React.Fragment key={name}></React.Fragment>;
};

const Settings = () => {
  const [css] = useStyletron();
  const { user } = useAuth0();

  if (!user) {
    return <Loading />;
  }

  return (
    <div
      className={css({
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 1rem",
      })}
    >
      {Object.keys(user).map((field: string) =>
        renderInput(field as UserFields, (user as any)[field])
      )}
    </div>
  );
};

export default Settings;
