export async function downloadResume() {
    try {
      // Using local PDF file from public directory
      const resumeUrl = '/assets/resume.pdf';
      
      // First check if file exists
      const response = await fetch(resumeUrl);
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Tapas_Resume.pdf';
      
      // Programmatically click the link to trigger download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Show user-friendly error message
      alert('Sorry, the resume is currently unavailable. Please try again later.');
    }
  }