import * as React from "react";
import { useStyletron } from "baseui";
import { Layer } from "baseui/layer";
import { Overflow, DeleteAlt, Show } from "baseui/icon";
import { AppNavBar, setItemActive, NavItemT } from "baseui/app-nav-bar";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const SETTINGS = "Settings";
const LOGOUT = "Logout";
const DASHBOARD = "Dashboard";

const Navbar = () => {
  const history = useHistory();
  const { user, logout } = useAuth0();
  const [css] = useStyletron();
  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    { icon: Show, label: DASHBOARD },
  ]);

  const userItems: NavItemT[] = [
    { icon: Overflow, label: SETTINGS },
    { icon: DeleteAlt, label: LOGOUT },
  ];

  const handleItemSelect = (item: NavItemT) => {
    if (item.label === DASHBOARD) {
      setMainItems((prev) => setItemActive(prev, item));
      history.push("/");
    }
    if (item.label === SETTINGS) {
      setMainItems((prev) => setItemActive(prev, item));
      history.push("/settings");
    }
    if (item.label === LOGOUT) {
      setMainItems((prev) => setItemActive(prev, item));
      logout({ returnTo: window.location.origin });
    }
  };

  return (
    <Layer>
      <div
        className={css({
          boxSizing: "border-box",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
        })}
      >
        <AppNavBar
          title="BMGK Licence Manager"
          userItems={userItems}
          mainItems={mainItems}
          onMainItemSelect={handleItemSelect}
          onUserItemSelect={handleItemSelect}
          username={user?.nickname || "John Snow"}
          usernameSubtitle={user?.email || "john.snow@bmgk.tech"}
          userImgUrl={user?.picture || ""}
        />
      </div>
    </Layer>
  );
};

export default Navbar;
