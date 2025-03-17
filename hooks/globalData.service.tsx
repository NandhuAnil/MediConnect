import { useState, useEffect } from 'react';

export const useGenralDoctorData = () => {
  const [genralDoctorData, setGenralDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_RAW_URL = "https://nandhuanil.github.io/Campus_connect/doctorGeneral.json"; 

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_RAW_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setGenralDoctorData(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchParkingData();
  }, []);

  return { genralDoctorData, loading, error };
};


export const useBPDoctorData = () => {
  const [bpSplDoctor, setBpSplDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_RAW_URL = "https://nandhuanil.github.io/Campus_connect/doctorBPSpl.json"; 

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_RAW_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBpSplDoctor(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchParkingData();
  }, []);

  return { bpSplDoctor, loading, error };
};

export const useSugarDoctorData = () => {
  const [sugarSplDoctor, setSugarSplDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_RAW_URL = "https://nandhuanil.github.io/Campus_connect/doctorSugarSpl.json"; 

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_RAW_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSugarSplDoctor(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchParkingData();
  }, []);

  return { sugarSplDoctor, loading, error };
};

export const usePsycoDoctorData = () => {
  const [psycoSplDoctor, setPsycoSplDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_RAW_URL = "https://nandhuanil.github.io/Campus_connect/doctorPsycoSpl.json"; 

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_RAW_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPsycoSplDoctor(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchParkingData();
  }, []);

  return { psycoSplDoctor, loading, error };
};