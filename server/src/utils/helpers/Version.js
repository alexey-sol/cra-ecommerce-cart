import packageJson from "@root/package.json";

class Version {
    static getMajorVersion () {
        const fullVersion = Version.getFullVersion();
        return fullVersion
            .split(".")
            .shift();
    }

    static getFullVersion () {
        return packageJson.version;
    }
}

export default Version;
