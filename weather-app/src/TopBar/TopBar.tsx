import { useColorMode, Tooltip, IconButton } from "@chakra-ui/react";
import { MoonIcon, RepeatIcon, SunIcon, DeleteIcon } from "@chakra-ui/icons";

export interface ITopBarProps {
  colorMode: "light" | "dark";
  toggleColorMode: () => void;
  reloadWeather: () => void;
  removeLocalStorage: () => void;
}

const TopBar = (props: ITopBarProps) => {
  return (
    <header className="topBar">
      <div className="leftSection">
        <h1 className="appTitle" data-testid="title" data-test-colormode={props.colorMode} >Weather in London</h1>
      </div>
      <div className="rightSection">
        <Tooltip label="Remove saved data" fontSize="md">
          <IconButton
            aria-label="Remove saved data"
            className="deleteIcon"
            data-testid="delete"
            icon={<DeleteIcon />}
            onClick={props.removeLocalStorage}
          />
        </Tooltip>
        <Tooltip label="Update the view" fontSize="md">
          <IconButton
            aria-label="Reload page"
            className="reloadIcon"
            data-testid="refresh"
            icon={<RepeatIcon />}
            onClick={props.reloadWeather}
          />
        </Tooltip>
        <Tooltip
          label={
            props.colorMode === "light" ? "Too lights here?" : "Turn on the lights"
          }
          fontSize="md"
        >
          {props.colorMode === "light" ? (
            <IconButton
              aria-label="Turn on dark mode"
              data-testid="change-theme"
              className="themeIcon"
              icon={<MoonIcon />}
              onClick={props.toggleColorMode}
            />
          ) : (
            <IconButton
              aria-label="Turn on light mode"
              data-testid="change-theme"
              className="themeIcon"
              icon={<SunIcon />}
              onClick={props.toggleColorMode}
            />
          )}
        </Tooltip>
      </div>
    </header>
  );
};

export default TopBar;
