import { InputForm } from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFormTranslation } from '@/hooks';
import { TLoginFormSchema } from '@/zod';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  methods: UseFormReturn<TLoginFormSchema>;
  onEnter: React.KeyboardEventHandler<HTMLInputElement>;
};

export const LoginForm = ({ methods, onEnter }: Props) => {
  const formTrans = useFormTranslation();

  return (
    <div className="w-full flex flex-col">
      <Form {...methods}>
        <form className="space-y-4 w-full">
          <InputForm
            control={methods.control}
            name="email"
            label={formTrans('Login.Email.Label')}
            placeholder={formTrans('Login.Email.Placeholder')}
            styleType="glassmorphism"
            size={100}
          />
          <InputForm
            control={methods.control}
            name="password"
            type="password"
            label={formTrans('Login.Password.Label')}
            placeholder={formTrans('Login.Password.Placeholder')}
            styleType="glassmorphism"
            onKeyDown={onEnter}
          />
        </form>

        <Button variant="link" className="mt-2 mr-auto">
          {formTrans('Login.ForgotPassword')}
        </Button>
      </Form>
    </div>
  );
};
