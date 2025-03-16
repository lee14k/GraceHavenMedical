import { getDictionary } from '../app/[lang]/dictionaries'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import MembershipBlock from './membership-block';
import { Great_Vibes } from 'next/font/google';
import { RouteParams } from '@/types';

import styles from './memberships.module.css';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default async function Memberships(props: RouteParams) {
  const dict = await getDictionary(props.params.lang);

  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '4rem' }}>
      <Container fluid className="m-0 p-0 text-center">
        <h2 className={greatVibes.className} style={{ fontSize: '2.75rem', color: '#aa9c91', textAlign: 'center' }}>{dict.homePage.membershipPlans.title}</h2>
        <Container className={styles.membershipContent}>
          <div>
            {dict.homePage.membershipPlans.bodyText}
          </div>
        </Container>
        <Container>
          <Row className={styles.membershipPlans}>
            {dict.homePage.membershipPlans.plans.map((plan: { [key: string]: string }, idx: number) => (
              <MembershipBlock key={`plan-${idx}`} plan={plan} />
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}