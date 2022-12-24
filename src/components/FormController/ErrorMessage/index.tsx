import { FormHelperText } from '@mui/material';

const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <FormHelperText
      component='span'
      sx={{
        color: '#FD5A65',
        fontSize: 14,
        lineHeight: 'calc(17 / 14)',
        letterSpacing: 1,
        fontWeight: 500,
        marginTop: 1,
        marginLeft: 0,
        marginRight: 0,
        height: 17,
      }}
    >
      {message}
    </FormHelperText>
  );
};

export default ErrorMessage;
