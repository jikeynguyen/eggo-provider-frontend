import { Button } from '@/components/ui/button';
import { AppRoute } from '@/constant';
import { LoginForm } from '@/features/login/login.form';
import { useLoginProviderMutation } from '@/generated';
import { useFormTranslation } from '@/hooks';
import { me } from '@/redux/slices';
import { useAppDispatch } from '@/redux/store';
import { TLoginFormSchema } from '@/zod';
import LoginSchema from '@/zod/login-schema.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const formTrans = useFormTranslation();
  const methods = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const [loginMutation, { loading, error }] = useLoginProviderMutation();
  const dispatch = useAppDispatch();

  const handleLogin = ({ email, password }: TLoginFormSchema) => {
    loginMutation({
      variables: {
        email,
        password,
      },
      onCompleted: () => {
        dispatch(me());
      },
    });
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin({
        email: methods.getValues('email'),
        password: methods.getValues('password'),
      });
    }
  };

  return (
    <div className="flex items-center h-full w-80">
      <div className="w-full text-white">
        <h1 className="text-4xl font-extrabold lg:text-5xl mb-2">
          {formTrans('Login.Title')}
        </h1>
        <h3 className="text-xl font-regular mb-8">
          {formTrans('Login.Description')}
        </h3>
        <LoginForm methods={methods} onEnter={onEnter} />
        {error && <p className="text-red-500">{error.message}</p>}
        <div className="flex flex-col gap-4">
          <Button
            size={'lg'}
            className="mt-4"
            loading={loading}
            onClick={methods.handleSubmit(handleLogin)}
          >
            {formTrans('Login.Submit')}
          </Button>
          <Button variant="link" onClick={() => navigate(AppRoute.REGISTER)}>
            {formTrans('Login.Register')}
          </Button>
        </div>
      </div>
    </div>
  );
};
