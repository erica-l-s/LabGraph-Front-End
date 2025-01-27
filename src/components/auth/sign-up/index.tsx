import Logo from '@/components/ui/logo';
import ThemeToggle from '@/components/ui/theme';
import ErrorMessage from '@/components/utils/components/error-message';
import Link from 'next/link';
import InputField from '../common/InputField';
import SubmitButton from '../common/SubmitButton';
import { useAuth } from '../hooks/useAuth';

const SignUpForm = () => {

  const { formData, error, handleChange, handleSubmit } = useAuth(false);

  return (
    <div className='w-full max-w-md transform rounded-xl border border-borderColor px-8 py-8 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-2xl sm:px-16 sm:py-16'>
      <div className='absolute right-4 top-4 z-50'>
        <ThemeToggle />
      </div>
      <div className='text-center mb-0'>
        <div className='flex justify-center text-secondary opacity-95 transition-transform duration-300 ease-in-out'>
          <Logo className='w-32 sm:w-40 md:w-48 lg:w-56 opacity-85' />
        </div>
      </div>
      {error && <ErrorMessage message={error} />}
      <form onSubmit={handleSubmit} className='space-y-3'>
        <InputField
          id='username'
          type='text'
          label='Username'
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          id='email'
          type='email'
          label='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          id='password'
          type='password'
          label='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          id='confirmPassword'
          type='password'
          label='Confirm Password'
          value={formData.confirmPassword ?? ''}
          onChange={handleChange}
        />

        <SubmitButton text='Create Account' />

        <p className='mt-6 text-center text-xs sm:text-sm text-textSecondary'>
          Already have an account?{' '}
          <Link href='/login'
            className='font-medium text-textPrimary transition-colors duration-200'>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
