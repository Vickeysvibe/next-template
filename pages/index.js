import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="p-2 rounded-lg text-center w-full">
            <button
              className="bg-white p-4 rounded-lg"
              onClick={() => {
                signIn("google");
              }}
            >
              log in with google
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="p-2 rounded-lg text-center w-full">
            <button className="bg-white p-4 rounded-lg">
              logged in with google
            </button>
          </div>
        </div>
      </>
    );
  }
}
