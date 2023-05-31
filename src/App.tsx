import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FormView } from 'views/form-view/Form-view';
import { TableViewComponent } from 'views/table-view/Table-view';
import 'App.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [disableFormTab, setDisableFormTab] = useState(false);
  const [disableTableTab, setDisableTableTab] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const controlTab = (disableTableTab: boolean, disableFormTab: boolean) => {
    setDisableFormTab(disableFormTab);
    setDisableTableTab(disableTableTab);
  };

  return (
    <div className='main-container'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='tab container'
            className='tab-test'
          >
            <Tab
              label='Calculadora para triagem'
              {...a11yProps(0)}
              disabled={disableFormTab}
            />
            <Tab
              label='Tabela dos dados'
              {...a11yProps(1)}
              disabled={disableTableTab}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FormView controlTab={controlTab} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableViewComponent controlTab={controlTab} />
        </TabPanel>
        <div className='disclaimer center-content'>
          <div className=''>
            <h3>Avisos legais e isenção de responsabilidades</h3>
            <p>
              Todas as informações contidas aqui e produzidas pelo sistema
              NefroCheck são fornecidas{' '}
              <span className='not'>apenas com propósitos educacionais</span>.
            </p>
            <p>
              Estas informações{' '}
              <span className='not'>não devem ser usadas</span> para diagnóstico
              ou tratamento de quaisquer problemas de saúde ou doenças.
            </p>
            <p>
              ESTAS INFORMAÇÕES{' '}
              <span className='not'>NÃO DEVEM SUBSTITUIR</span> O JULGAMENTO
              CLÍNICO OU ORIENTAR DE ALGUMA FORMA O TRATAMENTO INDIVIDUAL DOS
              PACIENTES.
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
