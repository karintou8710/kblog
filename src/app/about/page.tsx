import UserProfile from './components/user-profile'

export default function Page() {
  return (
    <div className='container mx-auto max-w-[1000px] grow px-4 py-12'>
      <h1 className='mb-8 text-center text-4xl font-extrabold text-blue-600'>About</h1>
      <UserProfile />
    </div>
  )
}
