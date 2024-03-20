import { useGetTokenQuery } from '../store/apiSlice'

const UserAvatar = () => {
  const { data } = useGetTokenQuery()

  return (
        <div className="flex flex-0 flex-col">
            <div className="text-white w-full mt-4  font-bold">
                <p className="text-center truncate">
                    {data?.account.username || 'loading'}
                </p>
            </div>
            <img
                className="w-36 opacity-85 h-auto bg-custom-gold self-center m-4 mt-0 rounded-md shadow-[0_2px_4px_0] shadow-black"
                src="../assets/robot-message-icon.svg"
            />
        </div>
  )
}

export default UserAvatar
