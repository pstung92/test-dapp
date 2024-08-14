import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TokenLock from "../TokenLock/TokenLock";
import LiqudityLock from "../LiquidityLock/LiquidityLock";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const TokenLiquidityLockTabs = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Token Lock" />
          <Tab label="Liquidity Lock" />
        </Tabs>
      </Box>
      <CustomTabPanel value={currentTab} index={0}>
        <TokenLock />
      </CustomTabPanel>
      <CustomTabPanel value={currentTab} index={1}>
        <LiqudityLock />
      </CustomTabPanel>
    </Box>
  );
};

export default TokenLiquidityLockTabs;
