// Step 1

import {
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import React, { useEffect, useState } from 'react';
import { CheckerNextStep } from '../../../shared/interfaces/form';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { EXAMS_DETAILS } from '../../../shared/constants/exams';

export const ExamsForm = ({ selectNextStep }: CheckerNextStep) => {
  const [openCreatinine, setOpenCreatinine] = useState(false);
  const [openUrine, setOpenUrine] = useState(false);
  const [openMicroalb, setOpenMicroalb] = useState(false);
  const [openUltrasound, setOpenUltrasound] = useState(false);

  const handleClickCreatinine = () => {
    setOpenCreatinine(!openCreatinine);
  };

  const handleClickUrine = () => {
    setOpenUrine(!openUrine);
  };

  const handleClickMicroalb = () => {
    setOpenMicroalb(!openMicroalb);
  };

  const handleClickUltrasound = () => {
    setOpenUltrasound(!openUltrasound);
  };

  useEffect(() => {
    selectNextStep(2);
  });

  return (
    <div>
      <h2 className='step-title'>Exames</h2>
      <p className='subtitle'>
        Atenção realize esses exames antes de realizar o encaminhamento para
        Nefrologia.
      </p>
      <List>
        <ListItemButton onClick={handleClickCreatinine}>
          <ListItemIcon>
            <MedicalInformationIcon />
          </ListItemIcon>
          <ListItemText primary={EXAMS_DETAILS.CREATININE.LABEL} />
          {openCreatinine ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCreatinine} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4, maxWidth: 600 }}>
              <ListItemText primary={EXAMS_DETAILS.CREATININE.DETAIL} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickUrine}>
          <ListItemIcon>
            <MedicalInformationIcon />
          </ListItemIcon>
          <ListItemText primary={EXAMS_DETAILS.URINE.LABEL} />
          {openUrine ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUrine} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4, maxWidth: 600 }}>
              <ListItemText primary={EXAMS_DETAILS.URINE.DETAIL} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickMicroalb}>
          <ListItemIcon>
            <MedicalInformationIcon />
          </ListItemIcon>
          <ListItemText primary={EXAMS_DETAILS.MICROALB.LABEL} />
          {openMicroalb ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMicroalb} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4, maxWidth: 600 }}>
              <ListItemText primary={EXAMS_DETAILS.MICROALB.DETAIL} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickUltrasound}>
          <ListItemIcon>
            <MedicalInformationIcon />
          </ListItemIcon>
          <ListItemText primary={EXAMS_DETAILS.ULTRASOUND.LABEL} />
          {openUltrasound ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUltrasound} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={EXAMS_DETAILS.ULTRASOUND.DETAIL} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
