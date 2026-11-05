/**
 * ============================================================================
 * EASYMEDLEARNING — COURSES CONTENT SOURCE OF TRUTH
 * ============================================================================
 * Clean, simplified course content derived strictly from:
 * 1. Physical Handbook: "Absolute Guide to ECG Interpretation"
 *    - Author: Dr. Wasim Adil Khan
 *    - Under the guidance of Dr. Bhushan Bari, D.N.B (Cardiology)
 *    - 7 years in development
 *    - Specialized proprietary diagrams from basic to advanced
 *    - Shipped as a physical book with the ECG course
 * 2. Course Syllabus: 51 sequential chapters (starting with Introduction of the Heart).
 * ============================================================================
 */

export interface CourseChapter {
  number: number;
  title: string;
}

export interface CoursesContent {
  meta: {
    title: string;
    description: string;
  };
  breadcrumb: {
    home: string;
    current: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  handbook: {
    badge: string;
    title: string;
    subtitle: string;
    author: string;
    guidance: string;
    developmentTime: string;
    features: string[];
    image: {
      src: string;
      fallbackSrc: string;
      alt: string;
    };
  };
  syllabus: {
    badge: string;
    title: string;
    subtitle: string;
    totalChapters: number;
    chapters: CourseChapter[];
  };
}

export const courseChapters: CourseChapter[] = [
  { number: 1, title: 'Introduction of the Heart' },
  { number: 2, title: 'Depolarization & Repolarization of Different Parts of the Heart' },
  { number: 3, title: 'Cardiac Vectors' },
  { number: 4, title: 'ECG Paper' },
  { number: 5, title: 'Events of the ECG' },
  { number: 6, title: 'Heart Rate Calculation in Sinus Rhythm' },
  { number: 7, title: 'Electrodes & Concept of Leads' },
  { number: 8, title: 'Formation of Limb Leads' },
  { number: 9, title: 'Formation of Unipolar Chest Leads' },
  { number: 10, title: 'Ventricular Depolarization & Repolarization in Vertical Plane & Formation of QRS Complex in Limb Leads' },
  { number: 11, title: 'P Wave (Atrial Depolarization)' },
  { number: 12, title: 'T Wave (Ventricular Repolarization)' },
  { number: 13, title: 'U Wave' },
  { number: 14, title: 'Normal ECG Events' },
  { number: 15, title: 'Cardiac Axis Deviation' },
  { number: 16, title: 'Right & Left Atrial Enlargement (Hypertrophy)' },
  { number: 17, title: 'Heart Blocks' },
  { number: 18, title: 'Ventricular Hypertrophy' },
  { number: 19, title: 'Bundle Branch Blocks' },
  { number: 20, title: 'Abnormal T Wave' },
  { number: 21, title: 'Depolarization & Repolarization on Cellular Level & Electrolytes Imbalance' },
  { number: 22, title: 'Abnormal Rhythms' },
  { number: 23, title: 'Heart Rate Calculation in Irregular Rhythms (6 Second Method)' },
  { number: 24, title: 'Ventricular Premature Complexes (VPCs)' },
  { number: 25, title: 'Inverted (Retrograde) P Wave & WPW Syndrome' },
  { number: 26, title: 'Atrioventricular Nodal Re Entrant Tachycardia (AVNRT) & Atrioventricular Re Entrant Tachycardia (AVRT)' },
  { number: 27, title: 'Blood Supply of Heart (Coronary Arteries)' },
  { number: 28, title: 'Coronary Artery Disease (CAD)' },
  { number: 29, title: 'Cardiac Enzymes' },
  { number: 30, title: 'Capture Beat' },
  { number: 31, title: 'Rotation of Heart' },
  { number: 32, title: 'Pericarditis, Pericardial Effusion, Cardiac Tamponade & Myocarditis' },
  { number: 33, title: 'Valvular Disorders' },
  { number: 34, title: 'Acute Pulmonary Embolism & Emphysema' },
  { number: 35, title: 'J Wave' },
  { number: 36, title: 'Electrical Alternans' },
  { number: 37, title: 'Congenital Heart Diseases' },
  { number: 38, title: 'Cardiomyopathy' },
  { number: 39, title: 'Channelopathy' },
  { number: 40, title: 'Heart Failure' },
  { number: 41, title: "QT Interval & It's Disorders" },
  { number: 42, title: 'Stokes Adams Syndrome' },
  { number: 43, title: 'Sinoatrial (SA) Block' },
  { number: 44, title: 'Sick Sinus Syndrome' },
  { number: 45, title: 'Aberrant Ventricular Conduction' },
  { number: 46, title: 'Reciprocal Rhythm' },
  { number: 47, title: 'S1 Q3 T3 Pattern (McGinn-White Sign)' },
  { number: 48, title: 'Artificial Pacemakers' },
  { number: 49, title: 'Stress Test' },
  { number: 50, title: 'Absolute ECG Interpretation' },
  { number: 51, title: 'Dextrocardia & Leads Misplacement' },
];

export const coursesPageContent: CoursesContent = {
  meta: {
    title: 'ECG Interpretation Course & Handbook | EasyMedLearning',
    description:
      'Absolute Guide to ECG Interpretation by Dr. Wasim Adil Khan. 51 structured chapters and companion physical handbook covering basic to advanced ECG interpretation.',
  },
  breadcrumb: {
    home: 'Home',
    current: 'Courses',
  },
  hero: {
    title: 'Absolute Guide to ECG Interpretation',
    subtitle: 'Comprehensive ECG Course with Physical Companion Handbook',
    description:
      'A structured, clinically grounded ECG course taught by Dr. Wasim Adil Khan. Follows a 51-chapter sequential curriculum designed to build clear understanding from foundational basics to advanced clinical ECG diagnosis.',
  },
  handbook: {
    badge: 'PHYSICAL COMPANION HANDBOOK',
    title: 'Absolute Guide to ECG Interpretation',
    subtitle:
      'The official physical handbook will be provided alongside the course for desk reference and bedside clinical application upon launch.',
    author: 'Dr. Wasim Adil Khan',
    guidance: 'Under the guidance of Honorable Dr. Bhushan Bari, D.N.B (Cardiology)',
    developmentTime: '7 Years in Research and Development',
    features: [
      'Handmade and compiled over 7 years of clinical teaching and practice',
      'Written under the guidance of Dr. Bhushan Bari, D.N.B (Cardiology)',
      'Specialized original diagrams exclusive to this book to make complex concepts easy to understand',
      'Step-by-step progression from basic fundamentals to advanced clinical diagnosis',
      'Delivered as a physical hardcopy book with the ECG course',
    ],
    image: {
      src: '/images/ecg-handbook-cover.webp',
      fallbackSrc: '/images/ecg-handbook-cover.jpg',
      alt: 'Absolute Guide to ECG Interpretation book cover by Dr. Wasim Adil Khan',
    },
  },
  syllabus: {
    badge: 'COURSE SYLLABUS',
    title: '51 Chapters',
    subtitle: 'The complete 51-chapter syllabus of the course and companion handbook.',
    totalChapters: 51,
    chapters: courseChapters,
  },
};
