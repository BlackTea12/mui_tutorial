import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { ListItemDecorator } from '@mui/joy';

import { TabPanel } from '@mui/base';
import Tab from '@mui/joy/Tab';
import { MonitSideTab } from '../views/data/MonitorSideTab';

const SimpleTabPannel = () => {
  return (
    <Tabs
      orientation="horizontal"
      size="sm"
    >
      <TabList>
        {MonitSideTab.map((item,index) => (
          <Tab indicatorPlacement="top" variant="plain" key={index} sx={{flex: 'auto'}}>
            <ListItemDecorator>
              {item.icon}
            </ListItemDecorator>
            {item.title}
          </Tab>
        ))}
      </TabList>
      {MonitSideTab.map((item,index) => (
        <TabPanel value={index}>
          <b>{item.title}</b>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default SimpleTabPannel;