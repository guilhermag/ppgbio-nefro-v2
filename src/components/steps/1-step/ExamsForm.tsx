// Step 1

import {
  Checkbox,
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

export const ExamsForm = ({ selectNextStep }: CheckerNextStep) => {
  const checkOptions = [
    { name: 'creatine', label: 'Creatinina.' },
    { name: 'urine', label: 'Urina I.' },
    { name: 'microalb', label: 'Microalbuminuria.' },
    { name: 'ultrasound', label: 'Ultrassom de aparelho urinário.' },
  ];

  const handleChange = () => {
    selectNextStep(2);
  };

  return (
    <div>
      <h2 className='step-title'>Exames</h2>
      <p className='subtitle'>
        Atenção realize esses exames antes de realizar o encaminhamento para
        Nefrologia.
      </p>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalInformationIcon />
            </ListItemIcon>
            <ListItemText primary='Creatinina' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicationLiquidIcon />
            </ListItemIcon>
            <ListItemText primary='Urina I' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary='Microalbuminuria' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary='Ultrassom de aparelho urinário' />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
