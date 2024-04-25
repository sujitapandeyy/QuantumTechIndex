import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  const teamMembers = [
    {
      name: 'Abinash Rana',
      role: 'Project Director',
      imageSrc: '/team1.png',
    },
    {
      name: 'Atush Maharjan',
      role: 'Chief Financial Officer (CFO)',
      imageSrc: '/team2.png',
    },
    {
      name: 'Bipin Budhathoki',
      role: 'Chief Technology Officer (CTO)',
      imageSrc: '/team3.png',
    },
    {
      name: 'Sabin Sharma Paudel',
      role: 'Managing Director (MD)',
      imageSrc: '/team4.png',
    },
    {
      name: 'Saugat Bhusal',
      role: 'Sales and Marketing',
      imageSrc: '/team5.png',
    },
    {
      name: 'Sushan Maharjan',
      role: 'Lead Designer',
      imageSrc: '/team6.png',
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div className="m-4" >
            <div className="relative w-40 h-40 ml-10">
              <Image
                src={member.imageSrc}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Team;
