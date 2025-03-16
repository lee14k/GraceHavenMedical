import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './memberships.module.css';

interface MembershipBlockProps {
  plan: {
    [key: string]: string;
  }
}

export default function MembershipBlock(props: MembershipBlockProps) {
  return (
    <Col lg="4" className="p-2">
      <div className={styles.membershipBlock}>
        <h3 className={styles.planName}>{props.plan.planName}</h3>
        <p>{props.plan.planText}</p>
        <hr className={styles.hr} />
        <h3 className={styles.planPrice}>{props.plan.planPrice}</h3>
        <p className={styles.autoRenew}>{props.plan.autoRenewNotice}</p>
        <Button className="w-100" href={props.plan.bookingLink}>{props.plan.getStarted.toUpperCase()}</Button>
        <hr className={styles.hr} />
        <ul className={styles.planList}>
          {(props.plan.listItems as unknown as Array<string>).map((li, idx) => (
            <li key={`list-item-${idx}`}>
              <p>{li}</p>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
}
