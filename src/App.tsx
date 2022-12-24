import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DatePickerField,
  InputSelectField,
  InputTextField,
  NumberFormatField,
} from './components/FormController';
import { FormDataProps } from './models';
import { Box, Button, Container, Grid } from '@mui/material';
import { FormContainer } from './styles';
import { DummySelectData, patternURL } from './constants';

const App = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .nullable()
      .required('First Name is required!'),
    lastName: yup.string().trim().nullable().required('Last Name is required!'),
    email: yup
      .string()
      .nullable()
      .required('Email is required!')
      .email('Email is invalid!'),
    price: yup
      .number()
      .nullable()
      .transform(value => (!Number.isFinite(value) ? undefined : value))
      .required('Price is required!'),
    selectSong: yup.object().nullable().required('Song is required'),
    linkUrl: yup.string().trim().nullable().matches(patternURL, {
      message: 'Please enter a valid url',
      excludeEmptyString: true,
    }),
    startDate: yup
      .date()
      .required('Start date is required!')
      .nullable()
      .max(yup.ref('endDate'), 'End Date must be before the Start Date'),
    endDate: yup
      .date()
      .required('End date is required!')
      .nullable()
      .min(yup.ref('startDate'), 'End Date must be after the Start Date'),
    awards: yup.array().of(
      yup.object().shape({
        title: yup.string().trim().required('Title is required!'),
      })
    ),
  });

  const context = { path: 'awards' };
  const methods = useForm<FormDataProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      price: undefined,
      selectSong: null,
      startDate: null,
      endDate: null,
      linkUrl: '',
      awards: [
        {
          title: '',
        },
      ],
    },
    context,
  });

  const { handleSubmit, control, trigger } = methods;

  const onSubmit = (data: FormDataProps) => {
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'awards',
  });

  const handleChangeFields = (index: number) => {
    if (fields.length === 1 || index === fields.length - 1) {
      append({
        title: '',
      });
    } else {
      remove(index);
    }
  };

  const handleChangeDate = () => {
    trigger(['startDate', 'endDate']);
  };

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormProvider {...methods}>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InputTextField
                name='firstName'
                label='Full Name'
                placeholder='Enter first name'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputTextField
                name='lastName'
                label='Last Name'
                placeholder='Enter last name'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputTextField
                name='email'
                label='Email'
                placeholder='Enter email'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberFormatField
                name='price'
                label='Price'
                placeholder='Enter Price'
                prefix='$'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputSelectField
                name='selectSong'
                label='Select Song'
                placeholder='Ex: Lies'
                control={control}
                options={DummySelectData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputTextField
                name='linkUrl'
                label='Link'
                placeholder='Enter link'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePickerField
                name='startDate'
                label='Start Date'
                placeholder='Enter start date'
                control={control}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePickerField
                name='endDate'
                label='End Date'
                placeholder='Enter end date'
                control={control}
                extendOnChange={handleChangeDate}
              />
            </Grid>

            <Grid item container xs={12}>
              {fields.map((field, index) => (
                <Grid
                  container
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 2,
                  }}
                  key={field.id}
                  spacing={2}
                >
                  <Grid item xs={11}>
                    <InputTextField
                      name={`awards.${index}.title`}
                      placeholder='Enter title'
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Button onClick={() => handleChangeFields(index)}>
                      {fields.length === 1 || index === fields.length - 1
                        ? '+'
                        : '-'}
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Box
            marginTop={10}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Box>
        </FormContainer>
      </FormProvider>
    </Container>
  );
};

export default App;
