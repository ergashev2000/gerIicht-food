import React, { useContext, useRef } from 'react';
import Title from '../../Title/Title';
import styles from './Reservation.module.scss';
import { GerichtContext } from './../../Context';

export default function Reservation () {
  const { reservationRef } = useContext(GerichtContext);
  const dateRef = useRef();
  const timeRef = useRef();
  const changeType = (ref, type) => {
    ref.current.type = type;
  };
  return (
    <section ref={reservationRef} className={styles.reservation}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Reservations" title="Book A Table" />
          <div className={styles.dialogBox}>
            <form name="reservation" data-netlify="true" method="POST">
              <div className={styles.dialogForm}>
                <input type="hidden" name="form-name" value="reservation" />
                <select className={styles.text} name="persons" required>
                  <option value="1">1 person</option>
                  <option value="2">2 person</option>
                  <option value="3">3 person</option>
                  <option value="4">4 person</option>
                  <option value="5">5 person</option>
                  <option value="6">6 person</option>
                  <option value="7">7 person</option>
                </select>
                <input
                  ref={dateRef}
                  className={styles.date}
                  type="text"
                  name="date"
                  onFocus={() => changeType(dateRef, 'date')}
                  placeholder="12/05/2021"
                  min="2021-01-01"
                  max="2030-12-31"
                  required
                />
                <input
                  ref={timeRef}
                  className={styles.time}
                  type="text"
                  name="time"
                  onFocus={() => changeType(timeRef, 'time')}
                  placeholder="11:00 AM"
                  required
                />
              </div>
              <button className="btn__submit" type="submit" style={{ marginInline: 'auto' }}>Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
