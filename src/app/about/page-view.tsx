import UserProfile from './_components/user-profile'

export default function PageView() {
  return (
    <div className='container mx-auto max-w-[1000px] grow px-4 py-12'>
      <h1 className='mb-8 text-center text-4xl font-extrabold text-blue-600'>About</h1>
      <UserProfile />
    </div>
  )
}
