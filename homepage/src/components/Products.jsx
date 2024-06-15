import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import { BiCube } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { RiPlantLine } from 'react-icons/ri';
import { FaHospitalAlt } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import Modal from './Modal'

const Products = () => {

  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startups = [
    {
      id: 1,
      name: "Blockchain Innovators",
      category: "Technology",
      description: "Revolutionizing the tech industry with blockchain solutions.",
      fundingGoal: "$1,000,000",
      amountRaised: "$350,000",
      image: "images/blockchain-innovators.png",
      businessModel: "Our subscription-based model ensures continuous support and upgrades to our blockchain solutions, allowing businesses to stay ahead of the curve and maintain competitive advantage. We offer a tiered pricing structure to cater to startups, SMEs, and large enterprises.",
      founders: "John Doe, Jane Smith",
      targetAudience: "Tech companies, startups, SMEs, and large enterprises looking for blockchain integration.",
      problemStatement: "Many businesses struggle to integrate blockchain technology due to its complexity and high cost.",
      solution: "Providing affordable and scalable blockchain solutions that can be easily integrated into existing systems.",
      roadmapAndMilestones: "Q1 2023: Product launch; Q3 2023: Beta testing; Q1 2024: Full-scale deployment.",
      fundingGoalsAndAllocation: "Development: 50%, Marketing: 30%, Operations: 20%",
      partnershipsAndCollaborations: "Partnership with TechCorp for integration support.",
      securityAndCompliance: "Compliance with ISO/IEC 27001 standards and regular security audits.",
      communityEngagement: "Active on social media, regular webinars, and feedback sessions with users.",
      marketPotential: "Estimated market size of $10 billion with a growth rate of 15% annually.",
      userTestimonialsAndCaseStudies: [
        { text: "Blockchain Innovators helped streamline our supply chain operations and reduced costs by 25%. Their support team is responsive and knowledgeable.", author: "Emily Johnson, CEO of TechSolutions Inc.", description: "Emily Johnson is the CEO of a tech startup specializing in supply chain optimization solutions." },
        { text: "We integrated Blockchain Innovators' solution into our payment processing system, improving transaction speed and security. Highly recommended!", author: "Michael Brown, CFO of Global Payments Ltd.", description: "Michael Brown oversees financial operations at a global payment processing company." }
      ],
      technicalSpecifications: "Utilizes Ethereum blockchain, smart contracts, and a scalable architecture.",
      teamBackground: "Founders have 20+ years of combined experience in blockchain and tech industries."
    },
    {
      id: 2,
      name: "GreenChain Energy",
      category: "Environment",
      description: "Pioneering renewable energy solutions through blockchain.",
      fundingGoal: "$750,000",
      amountRaised: "$150,000",
      image: "images/greenchain-energy.png",
      businessModel: "GreenChain Energy uses a direct-to-consumer approach, providing decentralized energy solutions that are both affordable and sustainable. Our business model involves partnerships with local governments and communities to promote renewable energy adoption.",
      founders: "Alice Johnson, Bob Brown",
      targetAudience: "Households, businesses, and communities interested in renewable energy solutions.",
      problemStatement: "High costs and inefficiencies in current energy distribution methods.",
      solution: "Decentralized, blockchain-based energy distribution system that reduces costs and increases efficiency.",
      roadmapAndMilestones: "Q2 2023: Prototype development; Q4 2023: Pilot program; Q2 2024: Market launch.",
      fundingGoalsAndAllocation: "Research and Development: 40%, Marketing: 35%, Infrastructure: 25%",
      partnershipsAndCollaborations: "Collaborations with local governments for pilot programs.",
      securityAndCompliance: "Adheres to energy sector regulations and ensures data security through blockchain.",
      communityEngagement: "Community workshops and partnerships with environmental NGOs.",
      marketPotential: "Rapidly growing renewable energy market valued at over $1 trillion.",
      userTestimonialsAndCaseStudies: [
        { text: "Using GreenChain Energy's solar energy solution has not only reduced our carbon footprint but also saved us thousands in energy costs annually. Excellent initiative!", author: "David Smith, EcoHome Solutions", description: "David Smith is a homeowner and advocate for sustainable living solutions." },
        { text: "As a local government, we partnered with GreenChain Energy for our renewable energy initiative. Their technology has been reliable and effective in our community.", author: "Sarah Johnson, Mayor of GreenValley", description: "Sarah Johnson is the mayor of a small town committed to environmental sustainability." }
      ],
      technicalSpecifications: "Utilizes a hybrid blockchain model for optimal performance and security.",
      teamBackground: "Team includes experts in renewable energy and blockchain technology."
    },
    {
      id: 3,
      name: "MedChain",
      category: "Healthcare",
      description: "Securing medical data with blockchain technology.",
      fundingGoal: "$1,000,000",
      amountRaised: "$500,000",
      image: "images/medchain.jpg",
      businessModel: "MedChain operates on a B2B SaaS model, offering secure, scalable blockchain solutions for medical data management. Our platform integrates seamlessly with existing healthcare systems, ensuring data integrity and patient privacy.",
      founders: "Charlie Davis, Diana Evans",
      targetAudience: "Hospitals, clinics, and healthcare providers looking to secure patient data.",
      problemStatement: "Medical data breaches and inefficiencies in data management.",
      solution: "Blockchain-based platform that ensures data security, integrity, and seamless integration with healthcare systems.",
      roadmapAndMilestones: "Q3 2023: Beta testing; Q1 2024: Full launch; Q3 2024: Expansion to international markets.",
      fundingGoalsAndAllocation: "Development: 60%, Sales: 20%, Customer Support: 20%",
      partnershipsAndCollaborations: "Partnerships with major healthcare providers and IT firms.",
      securityAndCompliance: "HIPAA compliant and undergoes regular security audits.",
      communityEngagement: "Healthcare conferences, online forums, and regular updates to stakeholders.",
      marketPotential: "Global healthcare IT market is expected to reach $280 billion by 2025.",
      userTestimonialsAndCaseStudies: [
        { text: "MedChain's blockchain solution has greatly improved our patient data management, ensuring accuracy and security. It's been a game-changer for our hospital.", author: "Dr. Lisa Thompson, Chief Medical Officer, MedCare Hospital", description: "Dr. Lisa Thompson leads the medical team at a prominent hospital." },
        { text: "We trust MedChain to handle our sensitive medical records securely. Their platform is robust and compliant with healthcare regulations.", author: "Sarah Lee, Director of IT, HealthFirst Clinic", description: "Sarah Lee oversees IT operations at a healthcare clinic focused on patient care." }
      ],
      technicalSpecifications: "Uses Hyperledger Fabric for high security and privacy.",
      teamBackground: "Team with extensive experience in healthcare IT and blockchain."
    },
    {
      id: 4,
      name: "EduBlock",
      category: "Education",
      description: "Transforming education with blockchain-based solutions.",
      fundingGoal: "$300,000",
      amountRaised: "$90,000",
      image: "images/edublock.jpg",
      businessModel: "EduBlock offers a freemium model that provides basic blockchain educational tools for free, with premium features available through subscription. Our goal is to make blockchain education accessible to everyone, regardless of their financial situation.",
      founders: "Ethan Ford, Fiona Green",
      targetAudience: "Students, educators, and educational institutions seeking blockchain education tools.",
      problemStatement: "Lack of accessible and affordable blockchain education resources.",
      solution: "A comprehensive platform providing free and premium blockchain educational resources.",
      roadmapAndMilestones: "Q1 2023: Platform launch; Q3 2023: Premium features rollout; Q1 2024: Partnership with schools and universities.",
      fundingGoalsAndAllocation: "Content Development: 50%, Marketing: 30%, Platform Maintenance: 20%",
      partnershipsAndCollaborations: "Collaborations with educational institutions for curriculum integration.",
      securityAndCompliance: "GDPR compliant and ensures user data privacy.",
      communityEngagement: "Online communities, webinars, and partnerships with educational influencers.",
      marketPotential: "EdTech market is projected to reach $404 billion by 2025.",
      userTestimonialsAndCaseStudies: [
        { text: "EduBlock has made learning blockchain concepts easy and fun with their interactive platform. I highly recommend it for students and educators alike!", author: "Professor John Davis, Blockchain Institute", description: "Professor John Davis is a renowned educator and blockchain expert." },
        { text: "As a student, EduBlock's platform has been invaluable in helping me understand blockchain technology. The free resources are incredibly helpful.", author: "Sophia Parker, Student", description: "Sophia Parker is a college student passionate about technology and innovation." }
      ],
      technicalSpecifications: "Platform built on scalable cloud infrastructure with blockchain integration.",
      teamBackground: "Founders have backgrounds in education technology and blockchain development."
    },
    {
      id: 5,
      name: "TechSavvy Solutions",
      category: "Technology",
      description: "Innovative technology solutions for businesses worldwide.",
      fundingGoal: "$800,000",
      amountRaised: "$200,000",
      image: "images/techsavvy-solutions.jpeg",
      businessModel: "TechSavvy Solutions offers consulting services tailored to the needs of each client, ensuring they get the most out of our technology solutions. Our revenue comes from project-based fees and long-term consulting contracts.",
      founders: "George Harris, Hannah Lee",
      targetAudience: "Businesses of all sizes seeking to implement advanced technology solutions.",
      problemStatement: "Businesses often lack the expertise to fully leverage new technologies.",
      solution: "Customized consulting services to help businesses implement and optimize technology solutions.",
      roadmapAndMilestones: "Q2 2023: Expansion of consulting services; Q4 2023: Launch of new tech solutions; Q2 2024: International market entry.",
      fundingGoalsAndAllocation: "Consultant Hiring: 40%, Marketing: 30%, R&D: 30%",
      partnershipsAndCollaborations: "Partnerships with tech vendors and solution providers.",
      securityAndCompliance: "Compliance with industry standards and best practices.",
      communityEngagement: "Regular industry conferences, webinars, and publications.",
      marketPotential: "Global IT consulting market is expected to reach $487 billion by 2024.",
      userTestimonialsAndCaseStudies: [
        { text: "TechSavvy Solutions' consulting team helped us optimize our IT infrastructure, resulting in significant cost savings and improved efficiency. Their expertise is unmatched!", author: "Jessica Adams, IT Manager, GlobalTech Enterprises", description: "Jessica Adams oversees IT operations at a multinational technology company." },
        { text: "As a client of TechSavvy Solutions, we've benefited greatly from their strategic advice and hands-on support. They truly understand our business needs.", author: "Mark Johnson, CEO, InnovateTech Solutions", description: "Mark Johnson leads a tech company focused on innovation and growth." }
      ],
      technicalSpecifications: "Expertise in AI, blockchain, cloud computing, and cybersecurity.",
      teamBackground: "Team with extensive experience in technology consulting and solution implementation."
    },
    {
      id: 6,
      name: "GreenTech Innovations",
      category: "Environment",
      description: "Advancing green technologies for sustainable living.",
      fundingGoal: "$500,000",
      amountRaised: "$100,000",
      image: "images/greentech-innovations.png",
      businessModel: "GreenTech Innovations focuses on product sales, offering a range of green technologies designed to reduce carbon footprints. Our products are marketed through both online platforms and retail partnerships.",
      founders: "Ian Jackson, Ivy Kim",
      targetAudience: "Eco-conscious consumers and businesses seeking sustainable solutions.",
      problemStatement: "High carbon footprints and lack of accessible green technologies.",
      solution: "Innovative products that help consumers and businesses reduce their environmental impact.",
      roadmapAndMilestones: "Q3 2023: Product line expansion; Q1 2024: Retail partnerships; Q3 2024: International distribution.",
      fundingGoalsAndAllocation: "Product Development: 50%, Marketing: 30%, Distribution: 20%",
      partnershipsAndCollaborations: "Partnerships with environmental organizations and retail chains.",
      securityAndCompliance: "Adheres to environmental regulations and standards.",
      communityEngagement: "Workshops, social media campaigns, and collaborations with eco-influencers.",
      marketPotential: "Green technology market expected to grow to $36 billion by 2025.",
      userTestimonialsAndCaseStudies: [
        { text: "GreenTech Innovations' solar panels have significantly reduced our office's energy bills while helping us meet our sustainability goals. Impressive technology!", author: "Daniel Brown, Sustainability Manager, EcoTech Solutions", description: "Daniel Brown manages sustainability initiatives at a tech company." },
        { text: "We've partnered with GreenTech Innovations to provide eco-friendly solutions to our customers. Their products have been well-received for their quality and environmental benefits.", author: "Sarah Evans, CEO, EcoLiving Retail", description: "Sarah Evans leads a retail company specializing in eco-friendly products." }
      ],
      technicalSpecifications: "Products designed with cutting-edge sustainable materials and technologies.",
      teamBackground: "Team with backgrounds in environmental science and sustainable product development."
    },
    {
      id: 7,
      name: "HealthTech Systems",
      category: "Healthcare",
      description: "Empowering healthcare providers with cutting-edge technology.",
      fundingGoal: "$1,200,000",
      amountRaised: "$600,000",
      image: "images/healthtech-systems.png",
      businessModel: "HealthTech Systems operates on a B2B SaaS model, providing healthcare providers with advanced technology solutions that improve patient care and operational efficiency. Our pricing is based on the number of users and the features required.",
      founders: "Jack Lewis, Jill Martin",
      targetAudience: "Healthcare providers, including hospitals and clinics, looking to upgrade their technology.",
      problemStatement: "Outdated technology and inefficiencies in healthcare delivery.",
      solution: "Advanced technology solutions that enhance patient care and streamline healthcare operations.",
      roadmapAndMilestones: "Q2 2023: Launch of new features; Q4 2023: Expansion to more healthcare facilities; Q2 2024: International market expansion.",
      fundingGoalsAndAllocation: "R&D: 50%, Sales: 30%, Customer Support: 20%",
      partnershipsAndCollaborations: "Collaborations with healthcare technology providers.",
      securityAndCompliance: "HIPAA compliance and regular security updates.",
      communityEngagement: "Healthcare conferences, online webinars, and user feedback forums.",
      marketPotential: "Healthcare technology market projected to reach $511 billion by 2027.",
      userTestimonialsAndCaseStudies: [
        { text: "HealthTech Systems' EMR system has streamlined our patient data management and improved patient outcomes. It's a game-changer for our hospital!", author: "Dr. Rachel Carter, Chief Medical Officer, New Horizons Hospital", description: "Dr. Rachel Carter leads medical operations at a leading hospital." },
        { text: "We chose HealthTech Systems for their ability to customize solutions to our clinic's specific needs. Their support team has been excellent in ensuring smooth implementation.", author: "Mark Johnson, Administrator, Wellness Clinic", description: "Mark Johnson oversees operations at a healthcare clinic focused on wellness." }
      ],
      technicalSpecifications: "Uses cloud-based technology with strong data security measures.",
      teamBackground: "Experienced team in healthcare technology and software development."
    },
    {
      id: 8,
      name: "EduTech Solutions",
      category: "Education",
      description: "Revolutionizing education through interactive learning platforms.",
      fundingGoal: "$400,000",
      amountRaised: "$120,000",
      image: "images/edutech-solutions.jpg",
      businessModel: "EduTech Solutions utilizes a subscription-based model, offering interactive learning platforms that enhance the educational experience. Our tiered subscription plans cater to both individual learners and educational institutions.",
      founders: "Kevin Nelson, Kate Oliver",
      targetAudience: "Students, educators, and educational institutions looking for advanced learning tools.",
      problemStatement: "Traditional educational methods are not engaging enough for modern students.",
      solution: "Interactive and engaging learning platforms that improve student participation and outcomes.",
      roadmapAndMilestones: "Q1 2023: Platform launch; Q3 2023: Feature expansion; Q1 2024: Partnerships with educational institutions.",
      fundingGoalsAndAllocation: "Platform Development: 50%, Marketing: 30%, Customer Support: 20%",
      partnershipsAndCollaborations: "Partnerships with schools, universities, and educational content creators.",
      securityAndCompliance: "Compliant with educational data protection regulations.",
      communityEngagement: "Educational workshops, social media engagement, and collaboration with educators.",
      marketPotential: "EdTech market is projected to reach $404 billion by 2025.",
      userTestimonialsAndCaseStudies: [
        { text: "EduTech Solutions' interactive modules have transformed how our students engage with course material. The analytics dashboard provides valuable insights for educators.", author: "Professor Sarah Adams, Education Institute", description: "Professor Sarah Adams teaches at a prestigious educational institute." },
        { text: "As a student, EduTech Solutions has made learning enjoyable and interactive. The personalized feedback helps me stay on track with my studies.", author: "Alex Chen, Student", description: "Alex Chen is a high school student passionate about technology and learning." }
      ],
      technicalSpecifications: "Utilizes AI and machine learning for personalized learning experiences.",
      teamBackground: "Founders have expertise in education and technology development."
    }
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden'); // Lock scrolling when modal is open
    } else {
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling when modal is closed
    }
  }, [isModalOpen]);
  

  const handleCardClick = (startup) => {
    setSelectedStartup(startup);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStartup(null);
  };


  return (
    <div className='w-4/5 m-auto space-y-10 mb-20'>
      <div className='flex justify-between items-center p-2'>
        <ul className='flex items-center space-x-6 text-gray-800 text-lg font-medium'>
          <li className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
            <BiCube size={24} />
            <span>All Startups</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
            <AiOutlineRobot size={24} />
            <span>Technology</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
            <RiPlantLine size={24} />
            <span>Environment</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
            <FaHospitalAlt size={24} />
            <span>Healthcare</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer hover:text-blue-500'>
            <GiTeacher size={24} />
            <span>Education</span>
          </li>
        </ul>
        <div className='flex items-center space-x-5'>
          <button><BsArrowLeft size={"1.5rem"} /></button>
          <button className='bg-blue-400 rounded-full p-2 text-white drop-shadow-xl'><BsArrowRight size={"1.5rem"} /></button>
        </div>
      </div>
      <div className='products grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        {startups.map((startup) => (
          <div key={startup.id} className='product rounded-lg overflow-hidden shadow-md cursor-pointer' onClick={() => handleCardClick(startup)}>
            <img className='w-full h-60 object-cover' src={startup.image} alt={startup.name} />
            <div className='p-4'>
              <p className='text-lg font-semibold text-gray-800'>{startup.name}</p>
              <p className='text-sm text-gray-500 mb-2'>{startup.description}</p>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Goal: {startup.fundingGoal}</p>
                  <p className='text-sm text-gray-600'>Raised: {startup.amountRaised}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedStartup && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          startup={selectedStartup}
        />
      )}
    </div>
  );
}

export default Products;