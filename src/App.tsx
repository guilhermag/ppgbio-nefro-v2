import RefreshIcon from '@mui/icons-material/Refresh';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './App.css';
import { formSteps } from './components/steps';
import { FormComponent } from './shared/interfaces/form';
import { useForm } from './hooks/useForm';
import { Button, IconButton } from '@mui/material';

function App() {
  const formComponents: FormComponent[] = formSteps;
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  return (
    <div className='app'>
      <div className='header'>
        <h2>Vamos começar</h2>
      </div>
      <div className='form-container'>
        <form
          onSubmit={(e) => {
            changeStep(currentStep + 1, e);
          }}
        >
          <div className='inputs-container'>{currentComponent.component}</div>
          <div className='actions'>
            {isFirstStep ? (
              <></>
            ) : (
              <IconButton
                aria-label='refresh'
                color='primary'
                onClick={(e) => changeStep(0, e)}
              >
                <RefreshIcon />
              </IconButton>
            )}

            {isLastStep ? (
              <></>
            ) : (
              <Button
                variant='outlined'
                endIcon={<NavigateNextIcon />}
                type='submit'
              >
                Avançar
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
