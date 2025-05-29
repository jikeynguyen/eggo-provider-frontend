import { InputForm } from '@/components/common/form';
import { Form } from '@/components/ui/form';
import { useFormTranslation } from '@/hooks';
import { TRegisterFormSchema } from '@/zod/register-schema.zod';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  methods: UseFormReturn<TRegisterFormSchema>;
};

export default function RegisterForm({ methods }: Props) {
  const formTrans = useFormTranslation();

  return (
    <div className="w-full flex flex-col gap-6 ">
      <Form {...methods}>
        <form className="space-y-4 w-full ">
          <div className="flex flex-col md:flex-row gap-4">
            <InputForm
              control={methods.control}
              name="firstName"
              label={formTrans('Register.FirstName.Label')}
              placeholder={formTrans('Register.FirstName.Placeholder')}
              styleType="glassmorphism"
              size={100}
            />
            <InputForm
              control={methods.control}
              name="lastName"
              label={formTrans('Register.LastName.Label')}
              placeholder={formTrans('Register.LastName.Placeholder')}
              styleType="glassmorphism"
              size={100}
            />
          </div>
          <InputForm
            control={methods.control}
            name="email"
            label={formTrans('Register.Email.Label')}
            placeholder={formTrans('Register.Email.Placeholder')}
            styleType="glassmorphism"
            size={100}
          />
          <InputForm
            control={methods.control}
            name="phone"
            label={formTrans('Register.Phone.Label')}
            placeholder={formTrans('Register.Phone.Placeholder')}
            styleType="glassmorphism"
            size={100}
          />
          <InputForm
            control={methods.control}
            name="password"
            type="password"
            label={formTrans('Register.Password.Label')}
            styleType="glassmorphism"
          />
          <InputForm
            control={methods.control}
            name="confirmPassword"
            type="password"
            label={formTrans('Register.ConfirmPassword.Label')}
            styleType="glassmorphism"
          />
        </form>
      </Form>
    </div>
  );
}
