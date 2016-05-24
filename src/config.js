(function() {
	'use strict';

	angular
		.module('acorbel.ngMdIconSvg', ['ngMaterial'])
		.config(['$mdIconProvider', function($mdIconProvider) {
		$mdIconProvider.icon('access_time', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjMuOTkgNEMxMi45NCA0IDQgMTIuOTUgNCAyNHM4Ljk0IDIwIDE5Ljk5IDIwQzM1LjA0IDQ0IDQ0IDM1LjA1IDQ0IDI0UzM1LjA0IDQgMjMuOTkgNHpNMjQgNDBjLTguODQgMC0xNi03LjE2LTE2LTE2UzE1LjE2IDggMjQgOHMxNiA3LjE2IDE2IDE2LTcuMTYgMTYtMTYgMTZ6bTEtMjZoLTN2MTJsMTAuNDkgNi4zTDM0IDI5Ljg0bC05LTUuMzR6Ii8+PC9zdmc+");

		$mdIconProvider.icon('add', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzggMjZIMjZ2MTJoLTRWMjZIMTB2LTRoMTJWMTBoNHYxMmgxMnY0eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('add_circle_outline', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjYgMTRoLTR2OGgtOHY0aDh2OGg0di04aDh2LTRoLTh2LTh6TTI0IDRDMTIuOTUgNCA0IDEyLjk1IDQgMjRzOC45NSAyMCAyMCAyMCAyMC04Ljk1IDIwLTIwUzM1LjA1IDQgMjQgNHptMCAzNmMtOC44MiAwLTE2LTcuMTgtMTYtMTZTMTUuMTggOCAyNCA4czE2IDcuMTggMTYgMTYtNy4xOCAxNi0xNiAxNnoiLz48L3N2Zz4=");

		$mdIconProvider.icon('arrow_backward', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDAgMjJIMTUuNjZsMTEuMTctMTEuMTdMMjQgOCA4IDI0bDE2IDE2IDIuODMtMi44M0wxNS42NiAyNkg0MHYtNHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('arrow_forward', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgOGwtMi44MyAyLjgzTDMyLjM0IDIySDh2NGgyNC4zNEwyMS4xNyAzNy4xNyAyNCA0MGwxNi0xNnoiLz48L3N2Zz4=");

		$mdIconProvider.icon('block', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgNEMxMi45NSA0IDQgMTIuOTUgNCAyNHM4Ljk1IDIwIDIwIDIwIDIwLTguOTUgMjAtMjBTMzUuMDUgNCAyNCA0ek04IDI0YzAtOC44NCA3LjE2LTE2IDE2LTE2IDMuNyAwIDcuMDkgMS4yNyA5LjggMy4zN0wxMS4zNyAzMy44QzkuMjcgMzEuMDkgOCAyNy43IDggMjR6bTE2IDE2Yy0zLjcgMC03LjA5LTEuMjctOS44LTMuMzdMMzYuNjMgMTQuMkMzOC43MyAxNi45MSA0MCAyMC4zIDQwIDI0YzAgOC44NC03LjE2IDE2LTE2IDE2eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('caret_down', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTQgMjBsMTAgMTAgMTAtMTB6Ii8+PC9zdmc+");

		$mdIconProvider.icon('close', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzggMTIuODNMMzUuMTcgMTAgMjQgMjEuMTcgMTIuODMgMTAgMTAgMTIuODMgMjEuMTcgMjQgMTAgMzUuMTcgMTIuODMgMzggMjQgMjYuODMgMzUuMTcgMzggMzggMzUuMTcgMjYuODMgMjR6Ii8+PC9zdmc+");

		$mdIconProvider.icon('cloud_upload', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzguNzEgMjAuMDdDMzcuMzUgMTMuMTkgMzEuMjggOCAyNCA4Yy01Ljc4IDAtMTAuNzkgMy4yOC0xMy4zIDguMDdDNC42OSAxNi43MiAwIDIxLjgxIDAgMjhjMCA2LjYzIDUuMzcgMTIgMTIgMTJoMjZjNS41MiAwIDEwLTQuNDggMTAtMTAgMC01LjI4LTQuMTEtOS41Ni05LjI5LTkuOTN6TTI4IDI2djhoLTh2LThoLTZsMTAtMTAgMTAgMTBoLTZ6Ii8+PC9zdmc+");

		$mdIconProvider.icon('cloud', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzguNzEgMjAuMDdDMzcuMzUgMTMuMTkgMzEuMjggOCAyNCA4Yy01Ljc4IDAtMTAuNzkgMy4yOC0xMy4zIDguMDdDNC42OSAxNi43MiAwIDIxLjgxIDAgMjhjMCA2LjYzIDUuMzcgMTIgMTIgMTJoMjZjNS41MiAwIDEwLTQuNDggMTAtMTAgMC01LjI4LTQuMTEtOS41Ni05LjI5LTkuOTN6Ii8+PC9zdmc+");

		$mdIconProvider.icon('cloud_download', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzguNzEgMjAuMDdDMzcuMzUgMTMuMTkgMzEuMjggOCAyNCA4Yy01Ljc4IDAtMTAuNzkgMy4yOC0xMy4zIDguMDdDNC42OSAxNi43MiAwIDIxLjgxIDAgMjhjMCA2LjYzIDUuMzcgMTIgMTIgMTJoMjZjNS41MiAwIDEwLTQuNDggMTAtMTAgMC01LjI4LTQuMTEtOS41Ni05LjI5LTkuOTN6TTM0IDI2TDI0IDM2IDE0IDI2aDZ2LThoOHY4aDZ6Ii8+PC9zdmc+");

		$mdIconProvider.icon('content_copy', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzIgMkg4QzUuNzkgMiA0IDMuNzkgNCA2djI4aDRWNmgyNFYyem02IDhIMTZjLTIuMjEgMC00IDEuNzktNCA0djI4YzAgMi4yMSAxLjc5IDQgNCA0aDIyYzIuMjEgMCA0LTEuNzkgNC00VjE0YzAtMi4yMS0xLjc5LTQtNC00em0wIDMySDE2VjE0aDIydjI4eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('delete', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTIgMzhjMCAyLjIxIDEuNzkgNCA0IDRoMTZjMi4yMSAwIDQtMS43OSA0LTRWMTRIMTJ2MjR6TTM4IDhoLTdsLTItMkgxOWwtMiAyaC03djRoMjhWOHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('details', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNiA4bDE4IDMyTDQyIDhINnptNi43NSA0aDIyLjVMMjQgMzIgMTIuNzUgMTJ6Ii8+PC9zdmc+");

		$mdIconProvider.icon('done', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTggMzIuMzRMOS42NiAyNGwtMi44MyAyLjgzTDE4IDM4bDI0LTI0LTIuODMtMi44M3oiLz48L3N2Zz4=");
		
		$mdIconProvider.icon('edit', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNiAzNC41VjQyaDcuNWwyMi4xMy0yMi4xMy03LjUtNy41TDYgMzQuNXptMzUuNDEtMjAuNDFjLjc4LS43OC43OC0yLjA1IDAtMi44M2wtNC42Ny00LjY3Yy0uNzgtLjc4LTIuMDUtLjc4LTIuODMgMGwtMy42NiAzLjY2IDcuNSA3LjUgMy42Ni0zLjY2eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('eye', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgOUMxNCA5IDUuNDYgMTUuMjIgMiAyNGMzLjQ2IDguNzggMTIgMTUgMjIgMTVzMTguNTQtNi4yMiAyMi0xNUM0Mi41NCAxNS4yMiAzNC4wMSA5IDI0IDl6bTAgMjVjLTUuNTIgMC0xMC00LjQ4LTEwLTEwczQuNDgtMTAgMTAtMTAgMTAgNC40OCAxMCAxMC00LjQ4IDEwLTEwIDEwem0wLTE2Yy0zLjMxIDAtNiAyLjY5LTYgNnMyLjY5IDYgNiA2IDYtMi42OSA2LTYtMi42OS02LTYtNnoiLz48L3N2Zz4=");

		$mdIconProvider.icon('fast_backward', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjIgMzZWMTJMNSAyNGwxNyAxMnptMS0xMmwxNyAxMlYxMkwyMyAyNHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('fast_forward', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNOCAzNmwxNy0xMkw4IDEydjI0em0xOC0yNHYyNGwxNy0xMi0xNy0xMnoiLz48L3N2Zz4=");

		$mdIconProvider.icon('favorite_border', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzMgNmMtMy40OCAwLTYuODIgMS42Mi05IDQuMTdDMjEuODIgNy42MiAxOC40OCA2IDE1IDYgOC44MyA2IDQgMTAuODMgNCAxN2MwIDcuNTUgNi44IDEzLjcyIDE3LjEgMjMuMDdMMjQgNDIuN2wyLjktMi42M0MzNy4yIDMwLjcyIDQ0IDI0LjU1IDQ0IDE3YzAtNi4xNy00LjgzLTExLTExLTExem0tOC43OSAzMS4xMWwtLjIxLjE5LS4yMS0uMTlDMTQuMjggMjguNDggOCAyMi43OCA4IDE3YzAtMy45OSAzLjAxLTcgNy03IDMuMDggMCA2LjA4IDEuOTkgNy4xMyA0LjcyaDMuNzNDMjYuOTIgMTEuOTkgMjkuOTIgMTAgMzMgMTBjMy45OSAwIDcgMy4wMSA3IDcgMCA1Ljc4LTYuMjggMTEuNDgtMTUuNzkgMjAuMTF6Ii8+PC9zdmc+");

		$mdIconProvider.icon('feedback', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDAgNEg4QzUuNzkgNCA0LjAyIDUuNzkgNC4wMiA4TDQgNDRsOC04aDI4YzIuMjEgMCA0LTEuNzkgNC00VjhjMC0yLjIxLTEuNzktNC00LTR6TTI2IDI4aC00di00aDR2NHptMC04aC00di04aDR2OHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('home', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjAgNDBWMjhoOHYxMmgxMFYyNGg2TDI0IDYgNCAyNGg2djE2eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('label_outline', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzUuMjcgMTEuNjlDMzQuNTQgMTAuNjcgMzMuMzUgMTAgMzIgMTBsLTIyIC4wMmMtMi4yMSAwLTQgMS43Ny00IDMuOTh2MjBjMCAyLjIxIDEuNzkgMy45OCA0IDMuOThMMzIgMzhjMS4zNSAwIDIuNTQtLjY3IDMuMjctMS42OUw0NCAyNGwtOC43My0xMi4zMXpNMzIgMzRIMTBWMTRoMjJsNy4wOSAxMEwzMiAzNHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('list', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNiAyNmg0di00SDZ2NHptMCA4aDR2LTRINnY0em0wLTE2aDR2LTRINnY0em04IDhoMjh2LTRIMTR2NHptMCA4aDI4di00SDE0djR6bTAtMjB2NGgyOHYtNEgxNHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('lock_outline', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMzRjMi4yIDAgNC0xLjggNC00cy0xLjgtNC00LTQtNCAxLjgtNCA0IDEuOCA0IDQgNHptMTItMThoLTJ2LTRjMC01LjUyLTQuNDgtMTAtMTAtMTBTMTQgNi40OCAxNCAxMnY0aC0yYy0yLjIgMC00IDEuOC00IDR2MjBjMCAyLjIgMS44IDQgNCA0aDI0YzIuMiAwIDQtMS44IDQtNFYyMGMwLTIuMi0xLjgtNC00LTR6bS0xOC4yLTRjMC0zLjQyIDIuNzgtNi4yIDYuMi02LjJzNi4yIDIuNzggNi4yIDYuMnY0SDE3Ljh2LTR6TTM2IDQwSDEyVjIwaDI0djIweiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('logout', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAuMDkgMTUuNTlMMTEuNSAxN2w1LTUtNS01LTEuNDEgMS40MUwxMi42NyAxMUgzdjJoOS42N2wtMi41OCAyLjU5ek0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnY0aDJWNWgxNHYxNEg1di00SDN2NGMwIDEuMS44OSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('menu', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNiAzNmgzNnYtNEg2djR6bTAtMTBoMzZ2LTRINnY0em0wLTE0djRoMzZ2LTRINnoiLz48L3N2Zz4=");

		$mdIconProvider.icon('more_vert', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMTZjMi4yMSAwIDQtMS43OSA0LTRzLTEuNzktNC00LTQtNCAxLjc5LTQgNCAxLjc5IDQgNCA0em0wIDRjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00em0wIDEyYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('person_outline', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMTEuOGMyLjMyIDAgNC4yIDEuODggNC4yIDQuMnMtMS44OCA0LjItNC4yIDQuMi00LjItMS44OC00LjItNC4yIDEuODgtNC4yIDQuMi00LjJtMCAxOGM1Ljk1IDAgMTIuMiAyLjkxIDEyLjIgNC4ydjIuMkgxMS44VjM0YzAtMS4yOSA2LjI1LTQuMiAxMi4yLTQuMk0yNCA4Yy00LjQyIDAtOCAzLjU4LTggOCAwIDQuNDEgMy41OCA4IDggOHM4LTMuNTkgOC04YzAtNC40Mi0zLjU4LTgtOC04em0wIDE4Yy01LjMzIDAtMTYgMi42Ny0xNiA4djZoMzJ2LTZjMC01LjMzLTEwLjY3LTgtMTYtOHoiLz48L3N2Zz4=");

		$mdIconProvider.icon('person', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMjRjNC40MiAwIDgtMy41OSA4LTggMC00LjQyLTMuNTgtOC04LThzLTggMy41OC04IDhjMCA0LjQxIDMuNTggOCA4IDh6bTAgNGMtNS4zMyAwLTE2IDIuNjctMTYgOHY0aDMydi00YzAtNS4zMy0xMC42Ny04LTE2LTh6Ii8+PC9zdmc+");

		$mdIconProvider.icon('public', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgNEMxMi45NSA0IDQgMTIuOTUgNCAyNHM4Ljk1IDIwIDIwIDIwIDIwLTguOTUgMjAtMjBTMzUuMDUgNCAyNCA0em0tMiAzNS44NkMxNC4xMSAzOC44OCA4IDMyLjE2IDggMjRjMC0xLjIzLjE1LTIuNDMuNDItMy41OEwxOCAzMHYyYzAgMi4yMSAxLjc5IDQgNCA0djMuODZ6bTEzLjc5LTUuMDdDMzUuMjggMzMuMTcgMzMuNzggMzIgMzIgMzJoLTJ2LTZjMC0xLjEtLjktMi0yLTJIMTZ2LTRoNGMxLjEgMCAyLS45IDItMnYtNGg0YzIuMjEgMCA0LTEuNzkgNC00di0uODNjNS44NiAyLjM3IDEwIDguMTEgMTAgMTQuODMgMCA0LjE2LTEuNiA3Ljk0LTQuMjEgMTAuNzl6Ii8+PC9zdmc+");

		$mdIconProvider.icon('save', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzQgNkgxMGMtMi4yMSAwLTQgMS43OS00IDR2MjhjMCAyLjIxIDEuNzkgNCA0IDRoMjhjMi4yMSAwIDQtMS43OSA0LTRWMTRsLTgtOHpNMjQgMzhjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2em02LTIwSDEwdi04aDIwdjh6Ii8+PC9zdmc+");

		$mdIconProvider.icon('search', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzEgMjhoLTEuNTlsLS41NS0uNTVDMzAuODIgMjUuMTggMzIgMjIuMjMgMzIgMTljMC03LjE4LTUuODItMTMtMTMtMTNTNiAxMS44MiA2IDE5czUuODIgMTMgMTMgMTNjMy4yMyAwIDYuMTgtMS4xOCA4LjQ1LTMuMTNsLjU1LjU1VjMxbDEwIDkuOThMNDAuOTggMzggMzEgMjh6bS0xMiAwYy00Ljk3IDAtOS00LjAzLTktOXM0LjAzLTkgOS05IDkgNC4wMyA5IDktNC4wMyA5LTkgOXoiLz48L3N2Zz4=");

		$mdIconProvider.icon('settings', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzguODYgMjUuOTVjLjA4LS42NC4xNC0xLjI5LjE0LTEuOTVzLS4wNi0xLjMxLS4xNC0xLjk1bDQuMjMtMy4zMWMuMzgtLjMuNDktLjg0LjI0LTEuMjhsLTQtNi45M2MtLjI1LS40My0uNzctLjYxLTEuMjItLjQzbC00Ljk4IDIuMDFjLTEuMDMtLjc5LTIuMTYtMS40Ni0zLjM4LTEuOTdMMjkgNC44NGMtLjA5LS40Ny0uNS0uODQtMS0uODRoLThjLS41IDAtLjkxLjM3LS45OS44NGwtLjc1IDUuM2MtMS4yMi41MS0yLjM1IDEuMTctMy4zOCAxLjk3TDkuOSAxMC4xYy0uNDUtLjE3LS45NyAwLTEuMjIuNDNsLTQgNi45M2MtLjI1LjQzLS4xNC45Ny4yNCAxLjI4bDQuMjIgMy4zMUM5LjA2IDIyLjY5IDkgMjMuMzQgOSAyNHMuMDYgMS4zMS4xNCAxLjk1bC00LjIyIDMuMzFjLS4zOC4zLS40OS44NC0uMjQgMS4yOGw0IDYuOTNjLjI1LjQzLjc3LjYxIDEuMjIuNDNsNC45OC0yLjAxYzEuMDMuNzkgMi4xNiAxLjQ2IDMuMzggMS45N2wuNzUgNS4zYy4wOC40Ny40OS44NC45OS44NGg4Yy41IDAgLjkxLS4zNy45OS0uODRsLjc1LTUuM2MxLjIyLS41MSAyLjM1LTEuMTcgMy4zOC0xLjk3bDQuOTggMi4wMWMuNDUuMTcuOTcgMCAxLjIyLS40M2w0LTYuOTNjLjI1LS40My4xNC0uOTctLjI0LTEuMjhsLTQuMjItMy4zMXpNMjQgMzFjLTMuODcgMC03LTMuMTMtNy03czMuMTMtNyA3LTcgNyAzLjEzIDcgNy0zLjEzIDctNyA3eiIvPjwvc3ZnPg==");

		$mdIconProvider.icon('file', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTIgNEM5Ljc5IDQgOC4wMiA1Ljc5IDguMDIgOEw4IDQwYzAgMi4yMSAxLjc3IDQgMy45OCA0SDM2YzIuMjEgMCA0LTEuNzkgNC00VjE2TDI4IDRIMTJ6bTE0IDE0VjdsMTEgMTFIMjZ6Ii8+PC9zdmc+");

		$mdIconProvider.icon('share', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzYgMzIuMTdjLTEuNTIgMC0yLjg5LjU5LTMuOTMgMS41NEwxNy44MiAyNS40Yy4xMS0uNDUuMTgtLjkyLjE4LTEuNHMtLjA3LS45NS0uMTgtMS40bDE0LjEtOC4yM2MxLjA3IDEgMi41IDEuNjIgNC4wOCAxLjYyIDMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDZjMCAuNDguMDcuOTUuMTggMS40bC0xNC4xIDguMjNjLTEuMDctMS0yLjUtMS42Mi00LjA4LTEuNjItMy4zMSAwLTYgMi42OS02IDZzMi42OSA2IDYgNmMxLjU4IDAgMy4wMS0uNjIgNC4wOC0xLjYybDE0LjI1IDguMzFjLS4xLjQyLS4xNi44Ni0uMTYgMS4zMSAwIDMuMjIgMi42MSA1LjgzIDUuODMgNS44M3M1LjgzLTIuNjEgNS44My01LjgzLTIuNjEtNS44My01LjgzLTUuODN6Ii8+PC9zdmc+");

		$mdIconProvider.icon('verified_user', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4NCiAgICA8cGF0aCBkPSJNMCAwaDQ4djQ4SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTI0IDJMNiAxMHYxMmMwIDExLjExIDcuNjcgMjEuNDcgMTggMjQgMTAuMzMtMi41MyAxOC0xMi44OSAxOC0yNFYxMEwyNCAyem0tNCAzMmwtOC04IDIuODMtMi44M0wyMCAyOC4zNGwxMy4xNy0xMy4xN0wzNiAxOCAyMCAzNHoiLz4NCjwvc3ZnPg0K");
		$mdIconProvider.icon('email', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDAgOEg4Yy0yLjIxIDAtMy45OCAxLjc5LTMuOTggNEw0IDM2YzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00VjEyYzAtMi4yMS0xLjc5LTQtNC00em0wIDhMMjQgMjYgOCAxNnYtNGwxNiAxMCAxNi0xMHY0eiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('https', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMzYgMTZoLTJ2LTRjMC01LjUyLTQuNDgtMTAtMTAtMTBTMTQgNi40OCAxNCAxMnY0aC0yYy0yLjIxIDAtNCAxLjc5LTQgNHYyMGMwIDIuMjEgMS43OSA0IDQgNGgyNGMyLjIxIDAgNC0xLjc5IDQtNFYyMGMwLTIuMjEtMS43OS00LTQtNHpNMjQgMzRjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0em02LjItMThIMTcuOHYtNGMwLTMuNDIgMi43OC02LjIgNi4yLTYuMiAzLjQyIDAgNi4yIDIuNzggNi4yIDYuMnY0eiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('http', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNOSAyMkg1di00SDJ2MTJoM3YtNWg0djVoM1YxOEg5djR6bTUtMWgzdjloM3YtOWgzdi0zaC05djN6bTExIDBoM3Y5aDN2LTloM3YtM2gtOXYzem0xOC0zaC03djEyaDN2LTRoNGMxLjcgMCAzLTEuMyAzLTN2LTJjMC0xLjctMS4zLTMtMy0zem0wIDVoLTR2LTJoNHYyeiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('perm_identity', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMTEuOGMyLjMyIDAgNC4yIDEuODggNC4yIDQuMnMtMS44OCA0LjItNC4yIDQuMi00LjItMS44OC00LjItNC4yIDEuODgtNC4yIDQuMi00LjJtMCAxOGM1Ljk1IDAgMTIuMiAyLjkxIDEyLjIgNC4ydjIuMkgxMS44VjM0YzAtMS4yOSA2LjI1LTQuMiAxMi4yLTQuMk0yNCA4Yy00LjQyIDAtOCAzLjU4LTggOCAwIDQuNDEgMy41OCA4IDggOHM4LTMuNTkgOC04YzAtNC40Mi0zLjU4LTgtOC04em0wIDE4Yy01LjMzIDAtMTYgMi42Ny0xNiA4djZoMzJ2LTZjMC01LjMzLTEwLjY3LTgtMTYtOHoiLz48L3N2Zz4=");
		$mdIconProvider.icon('dashboard', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNiAyNmgxNlY2SDZ2MjB6bTAgMTZoMTZWMzBINnYxMnptMjAgMGgxNlYyMkgyNnYyMHptMC0zNnYxMmgxNlY2SDI2eiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('view_list', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNOCAyOGg4di04SDh2OHptMCAxMGg4di04SDh2OHptMC0yMGg4di04SDh2OHptMTAgMTBoMjR2LThIMTh2OHptMCAxMGgyNHYtOEgxOHY4em0wLTI4djhoMjR2LThIMTh6Ii8+PC9zdmc+");
		$mdIconProvider.icon('add_circle', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgNEMxMi45NSA0IDQgMTIuOTUgNCAyNHM4Ljk1IDIwIDIwIDIwIDIwLTguOTUgMjAtMjBTMzUuMDUgNCAyNCA0em0xMCAyMmgtOHY4aC00di04aC04di00aDh2LThoNHY4aDh2NHoiLz48L3N2Zz4=");
		$mdIconProvider.icon('file_upload', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMTggMzJoMTJWMjBoOEwyNCA2IDEwIDIwaDh6bS04IDRoMjh2NEgxMHoiLz48L3N2Zz4=");
		$mdIconProvider.icon('folder_new', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDAgMTJIMjRsLTQtNEg4Yy0yLjIxIDAtMy45OCAxLjc5LTMuOTggNEw0IDM2YzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00VjE2YzAtMi4yMS0xLjc5LTQtNC00em0tMiAxNmgtNnY2aC00di02aC02di00aDZ2LTZoNHY2aDZ2NHoiLz48L3N2Zz4=");
		$mdIconProvider.icon('folder', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjAgOEg4Yy0yLjIxIDAtMy45OCAxLjc5LTMuOTggNEw0IDM2YzAgMi4yMSAxLjc5IDQgNCA0aDMyYzIuMjEgMCA0LTEuNzkgNC00VjE2YzAtMi4yMS0xLjc5LTQtNC00SDI0bC00LTR6Ii8+PC9zdmc+");
		$mdIconProvider.icon('my_location', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgMTZjLTQuNDIgMC04IDMuNTgtOCA4czMuNTggOCA4IDggOC0zLjU4IDgtOC0zLjU4LTgtOC04em0xNy44OCA2QzQwLjk2IDEzLjY2IDM0LjM0IDcuMDQgMjYgNi4xMlYyaC00djQuMTJDMTMuNjYgNy4wNCA3LjA0IDEzLjY2IDYuMTIgMjJIMnY0aDQuMTJjLjkyIDguMzQgNy41NCAxNC45NiAxNS44OCAxNS44OFY0Nmg0di00LjEyYzguMzQtLjkyIDE0Ljk2LTcuNTQgMTUuODgtMTUuODhINDZ2LTRoLTQuMTJ6TTI0IDM4Yy03LjczIDAtMTQtNi4yNy0xNC0xNHM2LjI3LTE0IDE0LTE0IDE0IDYuMjcgMTQgMTQtNi4yNyAxNC0xNCAxNHoiLz48L3N2Zz4=");
		$mdIconProvider.icon('cancel', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMjQgNEMxMi45NSA0IDQgMTIuOTUgNCAyNHM4Ljk1IDIwIDIwIDIwIDIwLTguOTUgMjAtMjBTMzUuMDUgNCAyNCA0em0xMCAyNy4xN0wzMS4xNyAzNCAyNCAyNi44MyAxNi44MyAzNCAxNCAzMS4xNyAyMS4xNyAyNCAxNCAxNi44MyAxNi44MyAxNCAyNCAyMS4xNyAzMS4xNyAxNCAzNCAxNi44MyAyNi44MyAyNCAzNCAzMS4xN3oiLz48L3N2Zz4=");
		$mdIconProvider.icon('subdirectory_arrow_right', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNLTMxIDI5bC0xMiAxMi0yLjgzLTIuODMgNy4xNy03LjE3SC02MVY3aDR2MjBoMTguMzRsLTcuMTctNy4xN0wtNDMgMTdsMTIgMTJ6bTcxIDFMMjggNDJsLTIuODMtMi44M0wzMi4zNCAzMkg4VjZoNHYyMmgyMC4zNGwtNy4xNy03LjE3TDI4IDE4bDEyIDEyeiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('reorder', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNWgxOHYtMkgzdjJ6bTAgNGgxOHYtMkgzdjJ6bTAtOGgxOFY5SDN2MnptMC02djJoMThWNUgzeiIvPjwvc3ZnPg==");
		$mdIconProvider.icon('drag_handle', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNDAgMThIOHY0aDMydi00ek04IDMwaDMydi00SDh2NHoiLz48L3N2Zz4=");
		
	}])

})();
