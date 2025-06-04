import { useState, useEffect } from 'react';
import './App.css';
import { FiGithub, FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { SiVelog } from 'react-icons/si';
import myProfileImg from './assets/profile-placeholder2.jpg'; // 파일명에 맞게 수정

interface ProfileData {
  name: string;
  school: string;
  oneLiner: string;
  email: string;
  github: string;
  velog: string;
  instagram: string;
  linkedIn?: string;
  interests: string[];
  skills: string[];
  strengths: string[];
  growthKeywords: string[];
  mbti: string;
  personalityKeywords: string[];
  likes: string[];
  avatarUrl?: string;
}

const userProfile: ProfileData = {
  name: '조유진',
  school: '미림마이스터고',
  oneLiner: '끊임없이 배우고 성장하며 사용자 중심의 가치를 만드는\n 개발자입니다.',
  email: 's2570@e-mirim.hs.kr',
  github: 'https://github.com/dbwls05',
  velog: 'https://velog.io/@dbwls05/posts',
  instagram: 'https://www.instagram.com/whdwls._/?next=%2F',
  interests: ['프론트엔드 개발', 'UI/UX 디자인', '웹 접근성'],
  skills: ['Java', 'C', 'HTML/CSS', 'JavaScript'],
  strengths: ['끈기', '창의성', '책임감', '협업 능력'],
  growthKeywords: ['#집중력', '#성실함', '#배움열정', '#문제해결능력'],
  mbti: 'ISTP',
  personalityKeywords: ['조용하지만 몰입력 높은 타입', '분석적 사고', '효율성 중시'],
  likes: ['휴식', '음악 감상', '웹툰 보기', '새로운 기술 탐구'],
  avatarUrl: myProfileImg,
};

function App() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    setProfileData(userProfile);
  }, []);

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        프로필 정보를 불러오는 중입니다...
      </div>
    );
  }

  const {
    name, school, oneLiner, email, github, velog, instagram, linkedIn,
    interests, skills, strengths, growthKeywords, mbti,
    personalityKeywords, likes, avatarUrl,
  } = profileData;

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <header className="profile-header">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={`${name} 프로필 사진`}
              className="profile-avatar" />
          )}
          <h1 className="profile-name">{name}</h1>
          <p className="profile-school">{school}</p>
          <p className="one-liner-text">{oneLiner}</p>
          <div className="social-links">
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" aria-label="Email" className="social-icon"><FiMail /></a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><FiGithub /></a>
            <a href={velog} target="_blank" rel="noopener noreferrer" aria-label="velog" className="social-icon"><SiVelog /></a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><FiInstagram /></a>
            {linkedIn && (
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><FiLinkedin /></a>
            )}
          </div>
        </header>

        <main>
          <section className="section">
            <h2 className="section-title">기본 정보</h2>
            <div className="info-grid">
              <div className="info-item"><span className="info-label">이름</span><span className="info-value">{name}</span></div>
              <div className="info-item"><span className="info-label">학교</span><span className="info-value">{school}</span></div>
              <div className="info-item"><span className="info-label">이메일</span><span className="info-value"><a href={`mailto:${email}`}>{email}</a></span></div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">관심분야</h2>
            <div className="tag-list">
              {interests.map((interest: string, idx: number) => (
                <span key={idx} className="tag tag-interest">{interest}</span>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">사용 가능 기술</h2>
            <div className="tag-list">
              {skills.map((skill: string, idx: number) => (
                <span key={idx} className="tag tag-skill">{skill}</span>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">나의 장점</h2>
            <div className="tag-list">
              {strengths.map((strength: string, idx: number) => (
                <span key={idx} className="tag tag-strength">{strength}</span>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">성장 키워드</h2>
            <div className="tag-list">
              {growthKeywords.map((keyword: string, idx: number) => (
                <span key={idx} className="tag tag-keyword">{keyword}</span>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">MBTI / 성향 키워드</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">MBTI</span>
                <span className="tag tag-mbti">{mbti}</span>
              </div>
              <div className="info-item">
                <span className="info-label">성향</span>
                <div className="tag-list">
                  {personalityKeywords.map((keyword: string, idx: number) => (
                    <span key={idx} className="tag tag-keyword">{keyword}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">좋아하는 것</h2>
            <div className="tag-list">
              {likes.map((like: string, idx: number) => (
                <span key={idx} className="tag tag-like">{like}</span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
// App.tsx