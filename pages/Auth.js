import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Auth() {
  const { data: session, status } = useSession();

  return (
    <div>
      <br></br>
      <p> Do you have google account?</p>

      {!session && (
        <>
          <button className={styles.code} onClick={() => signIn()}>
            Sign In
          </button>
        </>
      )}

      {session && (
        <>
          <h4>You are logged as: {session.user.name}</h4>
          <div className={styles.boxCenter}>
            <h4>Google Email: {session.user.email}</h4>
            <br />
            {session.user.image && (
              <span>
                <img src={session.user.image} alt={session.user.name} />
              </span>
            )}
          </div>
          <br />
          <br />
          <button className={styles.code} onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}
