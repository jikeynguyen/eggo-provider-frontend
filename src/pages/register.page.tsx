import { Button } from '@/components/ui/button';
import { AppRoute } from '@/constant';
import RegisterForm from '@/features/register/register-form';
import { useRegisterProviderMutation } from '@/generated';
import { useCommonTranslation, useFormTranslation } from '@/hooks';
import { me } from '@/redux/slices';
import { useAppDispatch } from '@/redux/store';
import RegisterSchema, { TRegisterFormSchema } from '@/zod/register-schema.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const formTrans = useFormTranslation();
  const commonTrans = useCommonTranslation();
  const navigate = useNavigate();

  const toLogin = () => {
    navigate(AppRoute.LOGIN);
  };

  const methods = useForm<TRegisterFormSchema>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [registerMutation, { loading, error }] = useRegisterProviderMutation();
  const dispatch = useAppDispatch();

  const handleRegister = ({
    email,
    firstName,
    lastName,
    password,
    phone,
  }: TRegisterFormSchema) => {
    registerMutation({
      variables: {
        registerProviderInput: {
          email,
          firstName,
          lastName,
          password,
          phone,
        },
      },
      onCompleted: () => {
        dispatch(me());
      },
    });
  };

  return (
    <div className=" h-full flex flex-col justify-center text-white">
      <h1 className="text-4xl font-extrabold lg:text-5xl mb-4">
        {formTrans('Register.Title')}
      </h1>
      <h3 className="text-xl font-regular mb-10">
        {formTrans('Register.Description')}
      </h3>
      <RegisterForm methods={methods} />
      <span className="flex gap-2 items-center mt-4">
        <p className="text-sm opacity-80">
          {commonTrans('AlreadyHaveAccount')}
        </p>
        <Button variant="link" onClick={toLogin} className="p-0">
          {commonTrans('Login')}
        </Button>
      </span>
      {error && <p className="text-red-500 text-sm mt-4">{error.message}</p>}
      <Button
        className="mt-8"
        size={'lg'}
        onClick={methods.handleSubmit(handleRegister)}
        loading={loading}
      >
        {formTrans('Register.Submit')}
      </Button>
    </div>
  );
};
